// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	{
		name: "technologiestiftung/eslint-config",
		rules: {
			"prefer-const": "error",
			curly: "error",
			"no-console": ["error", { allow: ["warn", "error"] }],
			"no-undef": "error",
			"no-var": "error",
			//FIXME: default case not working?
			"default-case": ["error"],
			"arrow-parens": "error",
			"consistent-return": "error",
			"default-param-last": ["error"],
			eqeqeq: "error",
			"func-style": ["error", "declaration", { allowArrowFunctions: true }],
			"max-depth": ["error", 4],
			"max-params": ["error", 3],
			complexity: ["error", 20],
			"new-cap": ["error", { newIsCap: true }],
			"no-else-return": "error",
			"no-eval": "error",
			"no-implicit-globals": "error",
			"no-lonely-if": "error",
			"no-loop-func": "error",
			"no-multi-assign": "error",
			"no-multi-str": "error",
			"no-nested-ternary": "error",
			"no-new": "error",
			"no-param-reassign": "error",
			"no-return-assign": "error",
			"no-shadow": "error",
			"no-throw-literal": "error",
			"no-unneeded-ternary": "error",
			"prefer-template": "error",
			// Note: you must disable the base rule as it can report incorrect errors
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
	},
);
