import type { Config } from "../types.js";

// @ts-expect-error lack of type defination
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import { baseRules } from "../rules/index.js";
import { setNameDefault } from "../utils/setNameDefault.js";

const testFileGlob = [
  "**/__tests__/**/*.[jt]s?(x)",
  "**/?(*.)+(spec|test).[jt]s?(x)",
  "**/test/**/*.[jt]s?(x)",
  "**/tests/**/*.[jt]s?(x)",
];

const configArray: Config[] = [
  ...[
    setNameDefault(
      "jest/plugin/recommended",
      eslintPluginJest.configs["flat/recommended"],
    ),
  ].map((conf) => {
    if (!conf.files) {
      conf.files = testFileGlob;
    }
    return conf;
  }),

  setNameDefault(
    "prettier/plugin/recommended",
    eslintPluginPrettierRecommended,
  ),

  setNameDefault("hexo-plugin/rules/base", { rules: baseRules }),
];

export default configArray;
