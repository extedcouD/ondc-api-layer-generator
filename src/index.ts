import { writeFileSync } from "fs";
import { compileSingleConfig } from "./generator";
import path from "path";

const test = {
	_NAME_: "test1",
	temp: "context.action",
	enum2: ["1", "2"],
	_RETURN_: "temp ARE UNIQUE",
};

writeFileSync(
	path.resolve(__dirname, "../validation-api/validations/validations.ts"),
	compileSingleConfig(test)
);
