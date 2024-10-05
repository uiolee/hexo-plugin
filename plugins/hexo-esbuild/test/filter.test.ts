import { readFile } from "fs/promises";
import { resolve } from "path";

import { filter } from "../src/filter";
import { default_options } from "../src/default_config";

describe("filter", () => {
  test("default", () => {
    const testFilePath = "jest.config.mjs";
    return readFile(resolve(testFilePath), { encoding: "utf-8" }).then(
      (str) => {
        return expect(
          filter.bind({ options: default_options["js"] })(str, {
            path: testFilePath,
          }),
        ).resolves.not.toBe(str);
      },
    );
  });

  test("throw error", () => {
    const testFilePath = "jest.config.mjs";
    return readFile(resolve(testFilePath), { encoding: "utf-8" }).then(
      (str) => {
        str += "\ninvalid token;";
        return expect(
          filter.bind({ options: default_options["js"] })(str, {
            path: testFilePath,
          }),
        ).rejects.toThrow();
      },
    );
  });

  test("skip min.js", () => {
    const testFilePath = "jest.config.mjs";
    return readFile(resolve(testFilePath), { encoding: "utf-8" }).then(
      (str) => {
        str += "\ninvalid token;";
        return expect(
          filter.bind({ options: default_options["js"] })(str, {
            path: testFilePath + ".min.js",
          }),
        ).resolves.toBe(str);
      },
    );
  });
});
