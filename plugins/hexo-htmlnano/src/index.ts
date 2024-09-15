import type Hexo from "hexo";
declare let hexo: Hexo;

import { filter } from "./filter";

hexo.config.hexo_htmlnano = hexo.config.hexo_htmlnano || {};
hexo.config.hexo_htmlnano.htmlnanoOptions = Object.freeze(
  Object.assign(
    {
      removeEmptyAttributes: false, // Disable the module "removeEmptyAttributes"
      collapseWhitespace: "conservative", // Pass options to the module "collapseWhitespace"
    },
    hexo.config.hexo_htmlnano.htmlnanoOptions,
  ),
);

hexo.config.hexo_htmlnano.postHtmlOptions = Object.freeze(
  Object.assign(
    {
      // sync: false, // https://github.com/posthtml/posthtml#usage
      // lowerCaseTags: true, // https://github.com/posthtml/posthtml-parser#options
      // quoteAllAttributes: false, // https://github.com/posthtml/posthtml-render#options
    },
    hexo.config.hexo_htmlnano.postHtmlOptions,
  ),
);

const options = Object.freeze(
  Object.assign(
    {
      enable: true,
      priority: 999,
      exclude: [],
      presetName: "safe",
    },
    hexo.config.hexo_htmlnano,
  ),
);
hexo.config.hexo_htmlnano = options;

if (options.enable) {
  hexo.extend.filter.register("after_render:html", filter, options.priority);
}
