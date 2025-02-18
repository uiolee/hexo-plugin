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
        return str;
      }
    }

    const { esbuildTransformOptions } = options;
    return transform(str, esbuildTransformOptions)
      .then((result) => {
        const res = result.code;
        console.log(`hexo-esbuild: processed '${path}'`); // TODO: improve log output
        resolve(res);
        return res;
      })
      .catch((err) => {
        const msg = `hexo-esbuild: failed in processing '${path}' with "esbuild" error: ${err}`;
        console.warn(msg);
        reject(err);
      });
  });
};

export default filter;
export { filter };
