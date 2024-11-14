import jsonpath from "jsonpath";

export function extractJsonValues(json: any, path: string) {
  try {
    return jsonpath.query(json, path);
  } catch (e: any) {
    throw new Error("Invalid JSON path");
  }
}
