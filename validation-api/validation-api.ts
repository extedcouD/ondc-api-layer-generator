import { extractValues } from "./utils";
import { Variable } from "./variable";

function createStaticVariable(values: string[]) {
  return new Variable(values);
}

function createPathVariable(path: string, payload: any) {
  return new Variable(extractValues(path, payload));
}

export default {
  createStaticVariable,
  createPathVariable,
};
