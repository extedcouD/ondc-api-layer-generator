import { compileSingleConfig } from ".";
import { CodeConfig } from "../../types/types";
import { finalApiTemplte } from "./bigger-templates";

type CompleteConfig = Record<string, CodeConfig[]>;

export function compileConfigFor(action: string, config: CodeConfig[]) {
	const functionCodes = config.map((s) => compileSingleConfig(s));
	const funcNames = config.map((s) => s._NAME_);
	return finalApiTemplte(functionCodes, funcNames, action);
}
