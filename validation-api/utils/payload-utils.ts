import jsonpath from "jsonpath";
function getJsonPath(payload: any, path: string) {
	return jsonpath.query(payload, path);
}

export default {
	getJsonPath,
};
