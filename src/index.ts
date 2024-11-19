import { writeFileSync } from "fs";
import { compileSingleConfig } from "./generator";
import path from "path";
import prettier from "prettier";

const test = {
	_NAME_: "test1",
	temp: "context.action",
	enum2: ["1", "2"],
	_RETURN_: "((temp ARE UNIQUE) && (temp ALL IN enum2)) || (enum2 ARE UNIQUE)",
};

const main = async () => {
	const code = compileSingleConfig(test);
	const formattedCode = await prettier.format(code, {
		parser: "typescript",
		tabWidth: 2,
	});

	writeFileSync(
		path.resolve(__dirname, "../validation-api/validations/validations.ts"),
		formattedCode
	);
};

main();
