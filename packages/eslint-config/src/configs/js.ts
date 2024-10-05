import type { Config } from "../types.js";

import eslintJs from "@eslint/js";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

import { baseRules } from "../rules/index.js";
import { setNameDefault } from "../utils/setNameDefault.js";

const configArray: Config[] = [
  setNameDefault("globals/node", {
    languageOptions: {
      globals: {
        // ...globals.nodeBuiltin,
        ...globals.node,
      },
    },
  }),

  setNameDefault(
    "@eslint/js/configs/recommended",
    eslintJs.configs.recommended,
  ),

  ...eslintPluginN.configs["flat/mixed-esm-and-cjs"],

  setNameDefault(
    "prettier/plugin/recommended",
    eslintPluginPrettierRecommended,
  ),

  setNameDefault("hexo-plugin/rules/base", { rules: baseRules }),
];

export default configArray;
