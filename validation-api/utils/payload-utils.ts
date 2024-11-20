import jsonpath from "jsonpath";
function getJsonPath(payload: any, path: string) {
	let output = jsonpath.query(payload, path);
	if (isListOfStringsOrNull(output)) {
		output = output.map((o) => (o === null ? "null" : o));
	}
	return output.length === 0 ? ["null"] : output;
}
function isListOfStringsOrNull(variable: any): boolean {
	return (
		Array.isArray(variable) &&
		variable.every((item) => item === null || typeof item === "string")
	);
}
export default {
	getJsonPath,
};

// const payload = {
// 	context: {
// 		item: "123",
// 	},
// };

// console.log(getJsonPath(payload, "$.context.context"));
