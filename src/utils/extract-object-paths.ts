// arrayOfObjectsPathExtractor.ts

import { JSONSchema7 } from "json-schema";

/**
 * Extracts all JSON paths from a given JSON Schema Draft-07 that point to arrays of objects.
 *
 * @param schema - The JSON Schema Draft-07 object.
 * @returns An array of JSON paths as strings pointing to arrays of objects.
 */
function getAllArrayOfObjectPaths(schema: JSONSchema7): string[] {
	const paths: Set<string> = new Set();

	/**
	 * Recursively traverses the JSON schema to find arrays of objects and records their paths.
	 *
	 * @param currentSchema - The current schema node being traversed.
	 * @param currentPath - The JSON path accumulated so far.
	 */
	function traverse(currentSchema: JSONSchema7, currentPath: string) {
		if (!currentSchema) return;

		// Normalize the 'type' property to an array for consistent processing
		const schemaTypes = Array.isArray(currentSchema.type)
			? currentSchema.type
			: currentSchema.type
				? [currentSchema.type]
				: [];

		// Handle combinators: allOf, anyOf, oneOf
		const combinators: Array<keyof JSONSchema7> = ["allOf", "anyOf", "oneOf"];
		for (const comb of combinators) {
			if (currentSchema[comb]) {
				// @ts-ignore
				for (const subSchema of currentSchema[comb]!) {
					traverse(subSchema as JSONSchema7, currentPath);
				}
			}
		}

		// Handle 'not' by skipping as it signifies exclusion
		if (currentSchema.not) {
			// Skipping 'not' schemas as they represent negations
		}

		// If the schema is of type 'object', traverse its properties
		if (schemaTypes.includes("object") && currentSchema.properties) {
			for (const [propName, propSchema] of Object.entries(
				currentSchema.properties
			)) {
				const newPath =
					currentPath === "$" ? `$.${propName}` : `${currentPath}.${propName}`;
				traverse(propSchema as JSONSchema7, newPath);
			}

			// Handle 'additionalProperties' if it's a schema
			if (
				currentSchema.additionalProperties &&
				typeof currentSchema.additionalProperties === "object"
			) {
				const newPath = `${currentPath}.*`; // Using '*' to denote any additional property
				traverse(currentSchema.additionalProperties as JSONSchema7, newPath);
			}

			// Handle 'patternProperties'
			if (currentSchema.patternProperties) {
				for (const [pattern, patternSchema] of Object.entries(
					currentSchema.patternProperties
				)) {
					const newPath = `${currentPath}.*`; // Using '*' as a placeholder for any matching pattern
					traverse(patternSchema as JSONSchema7, newPath);
				}
			}
		}

		// If the schema is of type 'array', check if items are objects
		if (schemaTypes.includes("array") && currentSchema.items) {
			let itemsSchema: JSONSchema7 | undefined;

			if (Array.isArray(currentSchema.items)) {
				// Tuple validation: items is an array of schemas
				// For the sake of this function, we'll consider each item schema separately
				currentSchema.items.forEach((itemSchema, index) => {
					const newPath = `${currentPath}[*]`; // Using [*] to denote any index
					traverse(itemSchema as JSONSchema7, newPath);
				});
				return; // For tuple validation, we do not record the current path as it's heterogeneous
			} else {
				// List validation: items is a single schema
				itemsSchema = currentSchema.items as JSONSchema7;
			}

			// Determine if 'itemsSchema' is an object type
			const itemsTypes = Array.isArray(itemsSchema.type)
				? itemsSchema.type
				: itemsSchema.type
					? [itemsSchema.type]
					: [];

			const isItemsObject = itemsTypes.includes("object");

			if (isItemsObject) {
				// Current path points to an array of objects
				paths.add(currentPath);
			}

			// Continue traversal into itemsSchema
			if (itemsSchema) {
				const newPath = `${currentPath}[*]`;
				traverse(itemsSchema, newPath);
			}
		}

		// Handle cases where 'type' is not specified but 'properties' or 'items' are present
		if (!currentSchema.type) {
			if (currentSchema.properties) {
				for (const [propName, propSchema] of Object.entries(
					currentSchema.properties
				)) {
					const newPath =
						currentPath === "$"
							? `$.${propName}`
							: `${currentPath}.${propName}`;
					traverse(propSchema as JSONSchema7, newPath);
				}
			}
			if (currentSchema.items) {
				const newPath = `${currentPath}[*]`;
				traverse(currentSchema.items as JSONSchema7, newPath);
			}
		}
	}

	// Initialize traversal with the root schema and the root path symbol '$'
	traverse(schema, "$");

	// Convert the Set to an array and return
	return Array.from(paths);
}

// Export the function for external use
export { getAllArrayOfObjectPaths };
