# eslint-config

## Example

```javascript
// eslint.config.mjs
import { js, ts, jest } from "eslint-config/configs";

export default [
  ...js,
  ...ts,
  ...jest,
  { ignores: ["**/build/**", "**/dist/**"] },
];
```
