import { writeFileSync } from "fs";
import { compileSingleConfig } from "./generator/validation-generator";
import path from "path";
import prettier from "prettier";

const test = {
	_NAME_: "test1",
	temp: "context.action",
	reg: ["regex"],
	_RETURN_: "(temp follow regex reg) && (temp all in reg)",
};

const main = async () => {
	const code = compileSingleConfig(test);
	const formattedCode = await prettier.format(code, {
		parser: "typescript",
		tabWidth: 4,
	});

	writeFileSync(
		path.resolve(__dirname, "../validation-api/validations/validations.ts"),
		formattedCode
	);
};

main();
