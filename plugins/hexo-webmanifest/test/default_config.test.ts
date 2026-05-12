import { defaultConfigs } from "../src/default_config";

test("type", () => {
  expect(typeof defaultConfigs).toBe("object");
  expect(typeof defaultConfigs.hexo_webmanifest).toBe("object");
  expect(typeof defaultConfigs.hexo_webmanifest.enable).toBe("boolean");
  expect(typeof defaultConfigs.hexo_webmanifest.enable_generate_manifest).toBe(
    "boolean",
  );
  expect(typeof defaultConfigs.hexo_webmanifest.enable_inject_tag_link).toBe(
    "boolean",
  );
  expect(typeof defaultConfigs.hexo_webmanifest.manifest_dest_path).toBe(
    "string",
  );
  expect(typeof defaultConfigs.hexo_webmanifest.manifest_basic).toBe("object");
  expect(typeof defaultConfigs.hexo_webmanifest.manifest_override).toBe(
    "object",
  );
  expect(typeof defaultConfigs.hexo_webmanifest.manifest_fieldMap).toBe(
    "object",
  );
});

test("main key", () => {
  const keys = Object.keys(defaultConfigs);
  expect(keys).toContain("hexo_webmanifest");
  expect(Object.keys(defaultConfigs.hexo_webmanifest).length).toEqual(7);
});

test("enable in default", () => {
  const { enable, enable_generate_manifest, enable_inject_tag_link } =
    defaultConfigs.hexo_webmanifest;

  for (const e of [enable, enable_generate_manifest, enable_inject_tag_link]) {
    expect(e).toBeTruthy();
  }
});
