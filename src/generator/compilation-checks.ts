import jsonpath from "jsonpath";

type ValidVariableLine = string | string[];

function isValidType(line: any): line is ValidVariableLine {
	return typeof line === "string" || Array.isArray(line);
}

export function checkVariableSyntax(line: any) {
	if (!isValidType(line)) {
		throw new Error(
			"Invalid variable syntax: " +
				JSON.stringify(line) +
				" is not a string or array of strings"
		);
	}
	if (Array.isArray(line)) return true;
	if (!isValidJsonPath(line)) {
		throw new Error("Invalid variable syntax: " + JSON.stringify(line));
	}
	return true;
}

export function isValidJsonPath(jsonPath: string) {
	try {
		jsonpath.query({}, jsonPath);
		return true;
	} catch (error) {
		return false;
	}
}
