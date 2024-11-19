export function extractOperationType(operation: string, variables: string[]) {
	// A ALL IN B  // A ARE UNIQUE
	const clone = operation.trim();
	const parts = clone.split(" ");
	const operationParts = parts
		.filter((p) => p !== "")
		.filter((p) => !variables.includes(p));
	return operationParts.join("_").toUpperCase();
}

export function validateBrackets(input: string) {
	const stack = [];
	const results = [];
	let currentText = "";
	let isValid = true;

	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (char === "(") {
			// Push current text to results if outside brackets
			if (currentText.trim() !== "") {
				results.push(currentText.trim());
				currentText = "";
			}
			stack.push("(");
		} else if (char === ")") {
			// Validate closing bracket
			if (stack.length === 0) {
				isValid = false;
				break;
			}
			stack.pop();
			if (currentText.trim() !== "") {
				results.push(currentText.trim());
				currentText = "";
			}
		} else {
			// Collect non-bracket text
			currentText += char;
		}
	}

	// Final checks
	if (stack.length !== 0) {
		isValid = false;
	}

	// Add any remaining text outside brackets
	if (currentText.trim() !== "") {
		results.push(currentText.trim());
	}

	return {
		isValid,
		extractedTexts: isValid ? results : [],
	};
}

export function replaceLogicalOperands(
	input: string,
	replacements: string[]
): string {
	let replacementIndex = 0;

	// Match all content inside parentheses while preserving the original input structure
	const result = input.replace(/\(([^()]+)\)/g, () => {
		// Use replacements sequentially
		if (replacementIndex < replacements.length) {
			return `(${replacements[replacementIndex++]})`;
		}
		throw new Error(
			"Not enough replacements provided for all parenthesized expressions."
		);
	});

	// Validate if replacements are exhausted or extra replacements exist
	if (replacementIndex < replacements.length) {
		throw new Error("Too many replacements provided; not all were used.");
	}

	return result;
}
