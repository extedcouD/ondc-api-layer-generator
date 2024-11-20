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

	// Check if the input contains any parentheses
	if (/\(([^()]+)\)/.test(input)) {
		// Match and replace all parenthesized expressions
		const result = input.replace(/\(([^()]+)\)/g, () => {
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
	} else {
		// No parentheses, replace the entire string with the first replacement
		if (replacements.length !== 1) {
			throw new Error(
				"Input has no parentheses, but multiple replacements were provided."
			);
		}
		return replacements[0];
	}
}

export function filterByFirstOccurrence(
	input: string,
	words: string[]
): string[] {
	// Create a map of word positions in the string
	const wordPositions = words.map((word) => ({
		word,
		index: input.indexOf(word),
	}));

	// Filter out words that are not present in the string
	const validWords = wordPositions.filter(({ index }) => index !== -1);

	// Sort the valid words by their first appearance in the string
	validWords.sort((a, b) => a.index - b.index);

	// Return the filtered list based on their appearance order
	return validWords.map(({ word }) => word);
}

export function isRegexValid(pattern: string): boolean {
	try {
		new RegExp(pattern); // Try creating the RegExp object
		return true; // If successful, the regex is valid
	} catch (e) {
		if (e instanceof SyntaxError) {
			return false; // If there's a syntax error, the regex is invalid
		}
		throw e; // Re-throw unexpected errors
	}
}
