import { Variable } from "./classes/variable";
import { extractValues } from "./utils";

import jsonpath from "jsonpath";

function getScope(payload: any, contextQuery: string) {
	return jsonpath.query(payload, contextQuery);
}

function createStaticVariable(values: string[]) {
	return new Variable(values);
}

function createPathVariable(path: string, payload: any) {
	return new Variable(extractValues(path, payload));
}

export default {
	createStaticVariable,
	createPathVariable,
	getScope,
};
