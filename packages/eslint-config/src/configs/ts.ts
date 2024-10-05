import type { Config } from "../types.js";

import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import { baseRules, typescriptRules } from "../rules/index.js";
import { setNameDefault } from "../utils/setNameDefault.js";

const configArray: Config[] = tseslint.config({
  extends: [
    ...tseslint.configs.recommended.map((config) => {
      if (config.name == "typescript-eslint/recommended") {
        config.files = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];
      }
      return config;
    }),

    setNameDefault(
      "prettier/plugin/recommended",
      eslintPluginPrettierRecommended,
    ),
  ],

  rules: { ...baseRules, ...typescriptRules },
  name: "hexo-plugin/rules/ts",
}) as Config[];

export default configArray;
