import type Hexo from "hexo";
declare let hexo: Hexo;

import { default_options } from "./default_config";
import { filter } from "./filter";
import type { Hexo_Esbuild_Options } from "./default_config";

const options: Hexo_Esbuild_Options = {
  ...default_options,
  ...hexo.config.hexo_esbuild,
};
hexo.config.hexo_esbuild = options;

if (options.enable) {
  // delete options.enable;

  for (const [k, v] of Object.entries(options)) {
    if (
      typeof v == "object" &&
      v.enable &&
      Reflect.has(v as object, "after_render")
    ) {
      const type = "filter";
      const fileType = v.after_render || k;
      hexo.extend.filter.register(
        `after_render:${fileType}`,
        filter.bind({ options: v }),
        v.priority,
      );
    }
  }
}
