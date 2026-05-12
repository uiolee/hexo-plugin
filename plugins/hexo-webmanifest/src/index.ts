import type Hexo from "hexo";

declare let hexo: Hexo;

import { type DefaultOptions, defaultOptions } from "./default_config";
import { manifestGen } from "./generator";
import { inject_link } from "./injector";

const options: DefaultOptions = Object.freeze(
  Object.assign(defaultOptions, hexo.config.hexo_webmanifest),
);
hexo.config.hexo_webmanifest = options;

if (!options.enable) {
  console.debug("hexo-webmanifest disabled.");
} else {
  if (options.enable_generate_manifest && options.manifest_dest_path) {
    hexo.extend.generator.register("copy_manifest_json", manifestGen);
  }

  if (options.enable_inject_tag_link && options.manifest_dest_path) {
    hexo.extend.injector.register(
      "head_end",
      inject_link(options, hexo),
      "default",
    );
  }
}
