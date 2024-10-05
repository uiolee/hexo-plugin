/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.tsx?$": ["esbuild-jest2", { sourcemap: "inline" }],
  },
  coverageProvider: "v8",
  coverageReporters: ["lcovonly", "text-summary"],
};
export default config;
