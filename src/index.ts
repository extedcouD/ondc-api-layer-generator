import { readFileSync, writeFileSync } from "fs";
import { compileSingleConfig } from "./generator/validation-compiler";
import path from "path";
import prettier from "prettier";
import { createSchemas } from "./generator/beckn-schema/extract-schema";
import yaml from "js-yaml";
import { convertToYamlWithRefs } from "./utils/yaml-ref";
import { compileConfigFor } from "./generator/validation-compiler/compile-complete";
import { finalMasterTemplate } from "./generator/validation-compiler/bigger-templates";
import { generateErrorFile } from "./generator/error-compiler/generate-error-file";
const test = {
	_NAME_: "checkActionMandatory",
	action: "context.action",
	enums: ["search"],
	_RETURN_: "action all in enums",
};

const main = async () => {
	await createSampleErrors();
	await createSampleValidations();
	// await createSampleSchemas();
};

main();
async function createSampleSchemas() {
	const build = readFileSync(
		"/Users/rudranshsinghal/ondc/automation-utility/test-packages/ondc-firewall-generator/src/docs/sample-build.yaml",
		"utf8"
	);
	const output = await createSchemas(build);
	for (const key in output) {
		writeFileSync(
			path.resolve(__dirname, `../validation-api/schemas/${key}.yaml`),
			convertToYamlWithRefs(output[key])
		);
	}
}
async function createSampleValidations() {
	const config = readFileSync(
		path.resolve(__dirname, "./docs/final.json"),
		"utf-8"
	);
	const parsedConfig = JSON.parse(config);

	for (const key in parsedConfig) {
		const code = compileConfigFor(key, parsedConfig[key]);
		const formattedCode = await prettier.format(code, {
			parser: "typescript",
			tabWidth: 4,
		});
		writeFileSync(
			path.resolve(
				__dirname,
				`../validation-api/validations/l1-validations/${key}.ts`
			),
			formattedCode
		);
	}
	const masterCode = finalMasterTemplate(Object.keys(parsedConfig));
	const formattedMasterCode = await prettier.format(masterCode, {
		parser: "typescript",
		tabWidth: 4,
	});
	writeFileSync(
		path.resolve(
			__dirname,
			`../validation-api/validations/l1-validations/index.ts`
		),
		formattedMasterCode
	);
}

async function createSampleErrors() {
	const buildYaml = readFileSync(
		path.resolve(__dirname, "./docs/sample-build.yaml"),
		"utf8"
	);
	const build = yaml.load(buildYaml) as any;
	const errors = build["x-errorcodes"];
	const errorFile = generateErrorFile(errors.code);
	const formattedErrorFile = await prettier.format(errorFile, {
		parser: "typescript",
		tabWidth: 4,
	});
	writeFileSync(
		path.resolve(__dirname, `../validation-api/validations/errors/errors.ts`),
		formattedErrorFile
	);
}
