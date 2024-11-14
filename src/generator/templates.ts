export const boilerplat = `
import validation from "../validation-api/validation-api"

`;

export const baseFunction = (
	name: string,
	contextQuery: string,
	variablesCode: string,
	continueCode: string,
	operationCode: string
) => `
function ${name}(payload : any){
    const scope = validation.getScope(payload, "${contextQuery}");
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
	return `const ${variableName} = validation.createStaticVariable([${vals}]);`;
};

export const pathVariableTemplate = (variableName: string, path: string) => {
	return `const ${variableName} = validation.createPathVariable("${path}", payload);`;
};
