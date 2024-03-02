// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	{
		rules: {
			"prefer-const": "error",
			curly: "error",
			"no-console": "error",
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
			"max-lines": ["error", 150],
			"max-params": ["error", 3],
			complexity: ["error", 3],
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
		},
	},
);
