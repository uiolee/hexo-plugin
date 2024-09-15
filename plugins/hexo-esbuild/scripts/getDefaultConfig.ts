// node -r esbuild-register scripts/getDefaultConfig.ts

import { default_config } from "../src/default_config";
import { stringify } from "yaml";

// console.log(JSON.stringify(default_config, null, 2));

const ymlText = stringify(default_config, {
  defaultStringType: "QUOTE_DOUBLE",
  defaultKeyType: "PLAIN",
  indent: 2,
});

console.log(ymlText);
