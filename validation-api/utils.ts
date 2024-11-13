function isArrayofObjects(variable: any): variable is Record<string, any>[] {
  return (
    Array.isArray(variable) &&
    variable.every((item) => typeof item === "object" && item !== null)
  );
}
function isPrimitive(
  value: any
): value is string | number | boolean | null | undefined {
  return (
    value === null ||
    value === undefined ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

export function extractValues(path: string, obj: any) {
  const keys = path.split(".");
  let result: string[] = [];
  if (path === "") {
    if (isPrimitive(obj)) {
      return [obj?.toString() ?? "NULL"];
    } else if (Array.isArray(obj) && obj.every(isPrimitive)) {
      return obj.map((item) => item?.toString() ?? "NULL");
    }
    return ["NULL"];
  } else if (isArrayofObjects(obj)) {
    for (let i = 0; i < obj.length; i++) {
      result = result.concat(extractValues(path, obj[i]));
    }
  } else {
    const key = keys[0];
    if (key in obj) {
      result = extractValues(keys.slice(1).join("."), obj[key]);
    } else {
      return ["NULL"];
    }
  }
  return result;
}
