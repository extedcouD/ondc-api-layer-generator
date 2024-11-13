// function isArrayofObjects(variable: any): variable is Record<string, any>[] {
//   return (
//     Array.isArray(variable) &&
//     variable.every((item) => typeof item === "object" && item !== null)
//   );
// }
// function isPrimitive(
//   value: any
// ): value is string | number | boolean | null | undefined {
//   return (
//     value === null ||
//     value === undefined ||
//     typeof value === "string" ||
//     typeof value === "number" ||
//     typeof value === "boolean"
//   );
// }

// function extractValues(path: string, obj: any) {
//   const keys = path.split(".");
//   let result: string[] = [];
//   if (path === "") {
//     if (isPrimitive(obj)) {
//       return [obj?.toString() ?? "NULL"];
//     } else if (Array.isArray(obj) && obj.every(isPrimitive)) {
//       return obj.map((item) => item?.toString() ?? "NULL");
//     }
//     return ["NULL"];
//   } else if (isArrayofObjects(obj)) {
//     for (let i = 0; i < obj.length; i++) {
//       result = result.concat(extractValues(path, obj[i]));
//     }
//   } else {
//     const key = keys[0];
//     if (key in obj) {
//       result = extractValues(keys.slice(1).join("."), obj[key]);
//     } else {
//       return ["NULL"];
//     }
//   }
//   return result;
// }

// const testObj = {
//   context: {
//     values: ["A", "B", "C"],
//     val: "test",
//   },
//   message: {
//     providers: [
//       {
//         id: 1,
//         fullfilments: [
//           {
//             values: ["i", "j", "k"],
//           },
//           {
//             abc: "def",
//           },
//         ],
//       },
//       {
//         id: 33,
//         fullfilments: [
//           {
//             values: ["second", "wale", "se"],
//           },
//           {
//             values: ["sec", "ke", "sec"],
//           },
//         ],
//       },
//     ],
//   },
// };

// console.log(extractValues("context.values", testObj));
// console.log(extractValues("context.val", testObj));
// console.log(extractValues("message.providers.fullfilments.values", testObj));
// console.log(extractValues("message.providers.id", testObj));
// console.log(extractValues("message.providers.fullfilments.abc", testObj));

import jsonpath from "jsonpath";

// Sample JSON data
const data = {
  id: 1,
  items: [
    { name: "Item1", price: 100 },
    { name: "Item2" }, // Missing 'price' attribute
    { name: "Item3", price: null }, // 'price' is explicitly null
  ],
};

// JSONPath query to get 'price' values
const prices = jsonpath.query(data, "$.id");
// Normalize results to handle missing attributes explicitly
const normalizedPrices = data.items.map((item) =>
  item.price !== undefined ? item.price : null
);

console.log("Prices with JSONPath:", prices); // Output with JSONPath query
console.log("Prices with normalization:", normalizedPrices); // Output with missing values set to null
