import validations from "../utils/validation-utils";
import payloadUtils from "../utils/payload-utils";

function test1(payload: any) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const ob of scope) {
		const temp = payloadUtils.getJsonPath(payload, "context.action");
		const enum2 = ["1", "2"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output =
			(validations.ARE_UNIQUE(temp) && validations.ALL_IN(temp, enum2)) ||
			validations.ARE_UNIQUE(temp);
		if (!output) return false;
	}
	return true;
}
