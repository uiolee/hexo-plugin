import { readFile } from "fs/promises";
import { resolve } from "path";

import { filter } from "../src/filter";
import { default_options } from "../src/default_config";
import { expect } from "@jest/globals";

describe("hexo-esbuild", () => {
  let jsStr = "";
  const filterData = { path: "jest.config.mjs" };
  let filterArgs = [];

  beforeAll(async () => {
    jsStr = await readFile(resolve(filterData.path), { encoding: "utf-8" });
  });

  beforeEach(() => {
    filterArgs = [
      jsStr,
      {
        ...filterData,
        ...{},
      },
    ];
  });

  test("default - minfy js", () => {
    return filter
      .bind({ options: default_options["js"] })(...filterArgs)
      .then((res) => {
        expect(res).not.toContain("/** @type");
        expect(res).not.toContain("default config");
        expect(res).toContain("../../jest.config.mjs");
      });
  });

  test("default - skip *.min.js", () => {
    filterArgs[1].path = "jest.config.mjs.min.js";
    return filter
      .bind({ options: default_options["js"] })(...filterArgs)
      .then((res) => {
        expect(res).toBe(jsStr);
      });
  });

  test("should throw error", () => {
    filterArgs = [jsStr + "\ninvalid code for test;\n", filterData];
    return expect(
      filter.bind({ options: default_options["js"] })(...filterArgs),
    ).rejects.toThrow();
  });
});
