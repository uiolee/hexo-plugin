import { js, ts, jest } from "eslint-config/configs";

export default [
  ...js,
  ...ts,
  ...jest,
  { ignores: ["**/build/**", "**/dist/**"] },
  // {
  //   languageOptions: {
  //     ecmaVersion: 2022,
  //     // sourceType: "script",
  //   },
  // },
];
