function extractOperationType(operation: string, variables: string[]) {
	// A ALL IN B  // A ARE UNIQUE
	const clone = operation.trim();
	const parts = clone.split(" ");
	const operationParts = parts
		.filter((p) => p !== "")
		.filter((p) => !variables.includes(p));
	return operationParts.join("_");
}
