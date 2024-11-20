import { readFileSync, writeFileSync } from "fs";
import { compileSingleConfig } from "./generator/validation-compiler";
import path from "path";
import prettier from "prettier";
import { createSchemas } from "./generator/beckn-schema/extract-schema";

import { convertToYamlWithRefs } from "./utils/yaml-ref";
import { compileConfigFor } from "./generator/validation-compiler/compile-complete";
import { finalMasterTemplate } from "./generator/validation-compiler/bigger-templates";
const test = {
	_NAME_: "checkActionMandatory",
	action: "context.action",
	enums: ["search"],
	_RETURN_: "action all in enums",
};

const main = async () => {
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

	// const build = readFileSync(
	// 	"/Users/rudranshsinghal/ondc/automation-utility/test-packages/ondc-firewall-generator/src/docs/sample-build.yaml",
	// 	"utf8"
	// );
	// const output = await createSchemas(build);
	// for (const key in output) {
	// 	writeFileSync(
	// 		path.resolve(__dirname, `../validation-api/schemas/${key}.yaml`),
	// 		convertToYamlWithRefs(output[key])
	// 	);
	// }
};

main();
