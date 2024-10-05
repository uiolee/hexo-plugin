import type { Rules } from "../types.js";

import baseRules from "./base.js";
import typescriptRules from "./typescript.js";

const rules: Rules = Object.freeze({
  ...baseRules,
});

export default rules;

export { rules, baseRules, typescriptRules };
