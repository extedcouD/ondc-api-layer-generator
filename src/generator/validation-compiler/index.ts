import {
	baseFunction,
	BinaryOperationTemplate,
	boilerplat,
	pathVariableTemplate,
	staticVariableTemplate,
	UnaryOperationTemplate,
} from "./templates";

import { ConfigKeyWords, nodeKeywords } from "../../constants/syntax-constants";
import {
	checkVariableSyntax,
	isValidJsonPath,
	validateReturnString,
} from "./compilation-checks";
import {
	knownBinaryOperations,
	knownOperations,
	knownUnaryOperations,
	operandKeywords,
} from "../../constants/operation-constants";
import {
	extractOperationType,
	filterByFirstOccurrence,
	isRegexValid,
	replaceLogicalOperands,
	validateBrackets,
} from "./utils";
import { CodeConfig } from "../../types/types";

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
	const operationCode = compileOperations(config, config._RETURN_);
	const continueCode = config._CONTINUE_
		? compileOperations(config, config._CONTINUE_)
		: "false";
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
function compileOperations(config: CodeConfig, retrn: string) {
	if (!validateReturnString(retrn)) {
		throw new Error("Invalid return string: " + retrn);
	}
	const variableNames = Object.keys(config).filter(
		(key) => !ConfigKeyWords.includes(key)
	);
	const brackates = validateBrackets(retrn);
	console.log(retrn, brackates);
	if (!brackates.isValid) {
		throw new Error("Invalid brackets: " + retrn);
	}
	const converted = brackates.extractedTexts
		.filter((s) => !["&&", "||"].includes(s))
		.map((s) => compileSingleOperation(s, variableNames, config));
	const returnCode = replaceLogicalOperands(retrn, converted);
	return returnCode;
}
function compileSingleOperation(
	operation: string,
	variables: string[],
	config: CodeConfig
) {
	const operationType = extractOperationType(operation, variables);
	variables = filterByFirstOccurrence(operation, variables);
	if (!knownOperations.includes(operationType)) {
		throw new Error("Unknown operation type: " + operationType);
	}
	if (knownUnaryOperations.includes(operationType)) {
		return UnaryOperationTemplate(variables[0], operationType);
	}
	if (knownBinaryOperations.includes(operationType)) {
		if (operationType === "FOLLOW_REGEX") {
			const regex = config[variables[1]];
			if (!Array.isArray(regex)) {
				throw new Error(
					"Invalid regex type: cannot have a json path in regex: " + regex
				);
			}
			for (const r of regex) {
				if (!isRegexValid(r)) {
					throw new Error("Invalid regex: " + r);
				}
			}
		}
		return BinaryOperationTemplate(variables[0], variables[1], operationType);
	}

	return "";
}
