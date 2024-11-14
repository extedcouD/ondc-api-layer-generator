import { writeFileSync } from "fs";
import { compileSingleConfig } from "./generator";

const test = {
	_NAME_: "test1",
	temp: "context.action",
	enum2: ["1", "2"],
	_RETURN_: "temp ALL IN enum2",
};

writeFileSync(
	"/Users/rudranshsinghal/ondc/automation-utility/test-packages/ondc-firewall-generator/validation-api/generated.ts",
	compileSingleConfig(test)
);
