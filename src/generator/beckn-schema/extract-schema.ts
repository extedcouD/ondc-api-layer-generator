import yaml from "js-yaml";
import RefParser from "@apidevtools/json-schema-ref-parser";
import { BUID_TYPE } from "../../types/buildTypes";
import { removeRequiredAndEnum } from "./schema-utils";
import { getAllJsonPaths } from "../../utils/extract-string-paths";
import { getAllArrayOfObjectPaths } from "../../utils/extract-object-paths";

async function dereferenceSchema(schema: any) {
	try {
		const dereferencedSchema = await RefParser.dereference(schema);
		return dereferencedSchema;
	} catch (error) {
		console.error("Error dereferencing schema:", error);
	}
}

export const createSchemas = async (yamlData: string) => {
	const raw = yaml.load(yamlData);
	const data = (await dereferenceSchema(raw)) as BUID_TYPE;
	const paths = data.paths;
	const apis = Object.keys(paths).map((key) => {
		return key.split("/")[1];
	});
	const output: any = { paths: {} };
	const response: any = {};
	for (const targetApi of apis) {
		const existingSchema =
			paths[`/${targetApi}`].post.requestBody.content["application/json"]
				.schema;
		output["response"] =
			paths[`/${targetApi}`].post.responses.default.content[
				"application/json"
			].schema;
		const filtteredSchema = removeRequiredAndEnum(existingSchema);
		output[targetApi] = filtteredSchema;

		output.paths[targetApi] = getAllJsonPaths(filtteredSchema as any);
	}
	return output;
};
