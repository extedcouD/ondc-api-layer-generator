export function createFunctionList(names: string[]) {
	return `const testFunctions: Array<(payload: string) => boolean> = [${names.join(",")}];`;
}

export function createMasterApiFunction(api: string) {
	return ` export function validate${capitalizeFirstLetter(api)}(payload: string) {
       
	for (const fn of testFunctions) {
		const result = fn(payload);
		if (!result) {
			return { valid: false, error: fn.name };
		}
	}
	return { valid: true };

    }`;
}

export function finalApiTemplte(
	testFunctionsCodes: string[],
	functionNames: string[],
	api: string
) {
	return `
        import validations from "../../utils/validation-utils";
        import payloadUtils from "../../utils/payload-utils";

        ${testFunctionsCodes.join("\n")}

        ${createFunctionList(functionNames)}

        ${createMasterApiFunction(api)}
    `;
}

function capitalizeFirstLetter(input: string): string {
	if (!input) return ""; // Handle empty strings
	return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function finalMasterTemplate(apis: string[]) {
	const importsCode = apis
		.map(
			(api) =>
				`import { validate${capitalizeFirstLetter(api)} } from "./${api}";`
		)
		.join("\n");
	const masterFunction = `
        export function performL1Validations(action: string, payload: string) {
            switch (action) {
                ${apis.map((api) => `case "${api}": return validate${capitalizeFirstLetter(api)}(payload);`).join("\n")}
                default:
                    throw new Error("Action not found");
            }
    }
    `;
	return `
        ${importsCode}
        ${masterFunction}
    `;
}
