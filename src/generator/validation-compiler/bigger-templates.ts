export function createFunctionList(names: string[]) {
	return `const testFunctions: Array<(payload: any,externalData: any) => {
		valid: boolean;
		errorCode?: number;
	}> = [${names.join(",")}];`;
}

export function createMasterApiFunction(api: string) {
	return ` export function validate${capitalizeFirstLetter(api)}(payload: string, externalData = {}) {
       
	for (const fn of testFunctions) {
		const result = fn(payload, externalData);
		if (result.errorCode && !result.valid) {
			return { valid: false, error: getError(result.errorCode) };
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
		import { getError } from "../errors/errors";


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
        export function performL1Validations(action: string, payload: string, externalData = {}) {
            switch (action) {
                ${apis.map((api) => `case "${api}": return validate${capitalizeFirstLetter(api)}(payload,externalData);`).join("\n")}
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
