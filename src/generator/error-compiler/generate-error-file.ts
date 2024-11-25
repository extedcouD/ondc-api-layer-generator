type ErrorDefinition = {
	code: number;
	Description: string;
};

export function generateErrorFile(errors: ErrorDefinition[]): string {
	console.log(errors);
	const allCodes = errors.map((error) => error.code);
	if (allCodes.length !== new Set(allCodes).size) {
		throw new Error("Duplicate error codes found");
	}
	errors.push({
		code: 20006,
		Description: "Invalid response does not meet API contract specifications",
	});
	errors.push({
		code: 30000,
		Description: "Invalid request does not meet API contract specifications",
	});
	const errorConstant = `
const errors = [
    ${errors.map((error) => `{code: ${error.code}, message: "${error.Description}"}`).join(",\n")}
];
    `;
	const errorFunction = `export function getError(code: number) {
	const error = errors.find((error) => error.code === code);
	if (!error) {
		throw new Error(\`Error code \${code} not found\`);
	}
	return error;
    }`;
	return `${errorConstant}\n${errorFunction}`;
}
