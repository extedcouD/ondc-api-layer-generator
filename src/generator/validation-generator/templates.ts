export const boilerplat = `
import validations from "../utils/validation-utils";
import payloadUtils from "../utils/payload-utils";


`;

export const baseFunction = (
	name: string,
	contextQuery: string,
	variablesCode: string,
	continueCode: string,
	operationCode: string
) => `
function ${name}(payload : any){
    const scope = payloadUtils.getJsonPath(payload, "${contextQuery}");
	for(const testObj of scope){
		${variablesCode}
		const skipCheck = ${continueCode};
		if(skipCheck) continue;
		const output = ${operationCode};
		if(!output) return false;
	}
    return true;
}`;

export const staticVariableTemplate = (
	variableName: string,
	values: string[]
) => {
	let vals = values.map((v) => `"${v}"`).join(", ");
	vals = vals.replace(/"/g, "'");
	return `const ${variableName} = [${vals}];`;
};

export const pathVariableTemplate = (variableName: string, path: string) => {
	return `const ${variableName} = payloadUtils.getJsonPath( testObj,"${path}");`;
};

export const UnaryOperationTemplate = (varName: string, operation: string) => {
	return `validations.${operation}(${varName})`;
};
export const UnaryOperationTemplateWithReturn = (
	var1: string,
	var2: string,
	operation: string
) => {
	return `validations.${operation}(${var1},${var2})`;
};

export const BinaryOperationTemplate = (
	leftVar: string,
	rightVar: string,
	operation: string
) => {
	return `validations.${operation}(${leftVar},${rightVar})`;
};
