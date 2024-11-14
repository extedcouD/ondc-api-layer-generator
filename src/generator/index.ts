import {
	baseFunction,
	boilerplat,
	pathVariableTemplate,
	staticVariableTemplate,
	UnaryOperationTemplate,
} from "./templates";
import { CodeConfig } from "../types/types";
import { ConfigKeyWords, nodeKeywords } from "../constants/syntax-constants";
import { checkVariableSyntax, isValidJsonPath } from "./compilation-checks";
import {
	knownOperations,
	knownUnaryOperations,
	operandKeywords,
} from "../constants/operation-constants";
import { extractOperationType } from "./utils";

export function compileSingleConfig(config: CodeConfig) {
	Object.keys(config)
		.filter((k) => !ConfigKeyWords.includes(k))
		.forEach((element) => {
			if (nodeKeywords.has(element) || operandKeywords.has(element)) {
				throw new Error("Invalid variable name: " + element);
			}
		});

	const scopeQuery = compileScopeQuery(config._SCOPE_);
	const variablesCode = compileVariables(config);
	const operationCode = compileOperations(config);
	const continueCode = "false";
	const boiler = boilerplat;
	return (
		boiler +
		baseFunction(
			config._NAME_,
			scopeQuery,
			variablesCode,
			continueCode,
			operationCode
		)
	);
}

function compileVariables(config: CodeConfig) {
	const keys = Object.keys(config);
	let result = "";
	for (const key in config) {
		if (config[key] === undefined) {
			throw new Error("Undefined variable value: " + key);
		}
		if (ConfigKeyWords.includes(key)) continue;
		if (!checkVariableSyntax(config[key])) {
			throw new Error(
				"Invalid variable syntax: " + JSON.stringify(config[key])
			);
		}
		if (Array.isArray(config[key])) {
			result += "\n\t" + staticVariableTemplate(key, config[key]);
		} else {
			result += "\n\t" + pathVariableTemplate(key, config[key]);
		}
	}
	return result;
}
function compileScopeQuery(scope: string | undefined) {
	// should only result to object or array of objects
	scope = scope ?? "$";
	if (isValidJsonPath(scope)) return scope;
	throw new Error("Invalid scope query: " + scope);
}
function compileOperations(config: CodeConfig) {
	const retrn = config._RETURN_;
	const variableNames = Object.keys(config).filter(
		(key) => !ConfigKeyWords.includes(key)
	);
	// resolve brackates and extract th operations inside the brackets
	const singleOperationCode = compileSingleOperation(retrn, variableNames);
	return `return ` + singleOperationCode;
}

function compileSingleOperation(operation: string, variables: string[]) {
	const operationType = extractOperationType(operation, variables);
	if (!knownOperations.includes(operationType)) {
		throw new Error("Unknown operation type: " + operationType);
	}
	if (knownUnaryOperations.includes(operationType)) {
		return UnaryOperationTemplate(variables[0], operationType);
	}
	return "";
}
