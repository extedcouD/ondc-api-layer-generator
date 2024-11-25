import { compileSingleConfig } from ".";
import { nodeKeywords } from "../../constants/syntax-constants";
import { CodeConfig } from "../../types/types";
import { finalApiTemplte } from "./bigger-templates";

export function compileConfigFor(action: string, config: CodeConfig[]) {
	const funcNames = config.map((s) => s._NAME_);
	validateNames(funcNames);
	for (const s of config) {
		if (s._ERROR_CODE_) continue;
		action.startsWith("on_")
			? (s._ERROR_CODE_ = 20006)
			: (s._ERROR_CODE_ = 30000);
	}
	const functionCodes = config.map((s) => compileSingleConfig(s));
	return finalApiTemplte(functionCodes, funcNames, action);
}

function validateNames(names: string[]) {
	const setNames = new Set(names);
	if (setNames.size !== names.length) {
		throw new Error("All _NAMES_ should be unique");
	}
	for (const name of names) {
		if (nodeKeywords.has(name)) {
			throw new Error("Invalid variable name: " + name);
		}
	}
}
