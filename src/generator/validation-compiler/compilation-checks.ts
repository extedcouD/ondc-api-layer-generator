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

export function validateReturnString(input: string): boolean {
	const stack: string[] = [];
	const validOperators = ["&&", "||"];
	const pattern = /\(([^)]+)\)/g; // Matches text inside parentheses

	// Step 1: Validate parentheses matching
	for (const char of input) {
		if (char === "(") {
			stack.push(char);
		} else if (char === ")") {
			if (stack.length === 0) return false; // Unmatched closing parenthesis
			stack.pop();
		}
	}
	if (stack.length !== 0) return false; // Unmatched opening parentheses

	// Step 2: Validate the structure
	const tokens = input
		.split(/(\(|\)|&&|\|\|)/)
		.filter((token) => token.trim() !== "");
	let expectOperand = true;

	for (const token of tokens) {
		if (token === "(" || token === ")") continue; // Skip parentheses in structure check

		if (expectOperand) {
			if (validOperators.includes(token)) return false; // Found operator when expecting operand
			expectOperand = false; // Next token should be an operator
		} else {
			if (!validOperators.includes(token)) return false; // Found non-operator when expecting operator
			expectOperand = true; // Next token should be an operand
		}
	}

	// Ensure the last token was not an operator
	if (!expectOperand) return true;

	return false;
}
