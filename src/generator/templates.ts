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
    ${variablesCode}
    // const cont = ${continueCode};
    ${operationCode};
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
	return `const ${variableName} = payloadUtils.getJsonPath( payload,"${path}");`;
};

export const UnaryOperationTemplate = (varName: string, operation: string) => {
	return `validations.${operation}(${varName});`;
};

export const BinaryOperationTemplate = (
	leftVar: string,
	rightVar: string,
	operation: string
) => {
	return `validations.${operation}(${leftVar},${rightVar});`;
};
