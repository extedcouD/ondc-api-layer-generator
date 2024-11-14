import validations from "../utils/validation-utils";
import payloadUtils from "../utils/payload-utils";

function test1(payload: any) {
	const scope = payloadUtils.getJsonPath(payload, "$");

	const temp = payloadUtils.getJsonPath(payload, "context.action");
	const enum2 = ["1", "2"];
	// const cont = false;
	return validations.ARE_UNIQUE(temp);
}
