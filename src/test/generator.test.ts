function validateAndExtract(input: string) {
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

console.log(validateAndExtract("( text ) && ( text2 )"));
console.log(validateAndExtract("text"));
console.log(validateAndExtract("(( text ) && ( text2 ))"));
console.log(validateAndExtract("text text2 )"));
