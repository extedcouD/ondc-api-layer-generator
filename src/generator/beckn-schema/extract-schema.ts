import yaml from "js-yaml";
export function extractAllSchemas(buildYaml: string) {
	const build = yaml.load(buildYaml);
}
