type ValidVariableLine = string | string[];
import reservedWords from "reserved-words";
import { nodeKeywords } from "../constants/syntax-contants";

function isValidVariableLine(line: any): line is ValidVariableLine {
  return typeof line === "string" || Array.isArray(line);
}

export function checkVariableSyntax(line: any) {
  const esKeywords = reservedWords.KEYWORDS;
  if (!isValidVariableLine(line)) {
    throw new Error(
      "Invalid variable syntax: " +
        JSON.stringify(line) +
        " is not a string or array of strings"
    );
  }

  if (Array.isArray(line)) {
    return true;
  }
}
