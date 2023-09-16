import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	someConfig,
	eslintConfigPrettier
];

module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential",
		"prettier"
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser"
	},
	plugins: [],
	rules: {
		"brace-style": "error",
		"no-else-return": "error",
		indent: ["error", "tab"],
		"keyword-spacing": "error",
		"padded-blocks": "error",
		"comma-dangle": ["error", "never"],
		semi: "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error"
	}
};
