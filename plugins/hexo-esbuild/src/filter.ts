import micromatch from "micromatch";
import { transform } from "esbuild";
import type { StoreFunctionData } from "hexo/dist/extend/renderer";
import type { Filter_Options } from "./default_config";

const filter = function (
  this: {
    options: Filter_Options;
  },
  str: string,
  data: StoreFunctionData,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const { path } = data;

    const { options } = this;
    const { exclude } = options;

    if (path && exclude && exclude.length) {
      if (micromatch.isMatch(path, exclude)) {
        resolve(str);
      }
    }

    const { esbuildTransformOptions } = options;
    transform(str, esbuildTransformOptions)
      .then((result) => {
        resolve(result.code);
      })
      .catch((err) => {
        console.error(`[esbuild] error in: `, path, err);
        reject(err);
      });
  });
};

export default filter;
export { filter };
