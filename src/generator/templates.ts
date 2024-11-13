export const boilerplat = `
import validation from "../validation-api/validation-api"

`;

export const baseFunction = (
  name: string,
  contextQuery: string,
  variablesCode: string,
  continueCode: string,
  returnCode: string
) => `
function ${name}(payload : any){
    //const scope = validation.getScope(payload, "${contextQuery}");
    const scope = payload;
    ${variablesCode}
    // const cont = ${continueCode};
    return ${returnCode};
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