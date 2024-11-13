import { writeFileSync } from "fs";
import { baseFunction, boilerplat, staticVariableTemplate } from "./templates";
import { CodeConfig } from "../types/types";
import { ConfigKeyWords, nodeKeywords } from "../constants/syntax-contants";
import { checkVariableSyntax } from "./compilation-checks";

function compileConfig(config: CodeConfig) {
  const scopeQuery = "";
  const variablesCode = complieVariables(config);
  const returnCode = "";
  const boiler = boilerplat;
  return (
    boiler +
    baseFunction(config._NAME_, scopeQuery, variablesCode, "true", returnCode)
  );
}

function complieVariables(config: CodeConfig) {
  const keys = Object.keys(config);
  let result = "";
  for (const key in config) {
    if (nodeKeywords.has(key)) {
      throw new Error("Invalid variable name: " + key);
    }
    if (ConfigKeyWords.includes(key)) continue;
    if (!checkVariableSyntax(config[key])) {
      throw new Error(
        "Invalid variable syntax: " + JSON.stringify(config[key])
      );
    }
    if (Array.isArray(config[key])) {
      result += staticVariableTemplate(key, config[key]);
    }
  }
  return result;
}

const test = {
  _NAME_: "test1",
  // temp: "context.action",
  enum2: ["ALL", "NONE"],
  _RETURN_: "temp.ALL in enum",
};

writeFileSync(
  "/Users/rudranshsinghal/ondc/automation-utility/test-packages/ondc-firewall-generator/validation-api/generated.ts",
  compileConfig(test)
);
