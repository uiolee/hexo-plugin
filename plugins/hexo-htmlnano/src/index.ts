import type Hexo from "hexo";
declare let hexo: Hexo;

import {
  default_htmlnanoOptions,
  default_options,
  default_postHtmlOptions,
} from "./default_config";
import { filter } from "./filter";

hexo.config.hexo_htmlnano = hexo.config.hexo_htmlnano || {};
hexo.config.hexo_htmlnano.htmlnanoOptions = Object.freeze(
  Object.assign(
    default_htmlnanoOptions,
    hexo.config.hexo_htmlnano.htmlnanoOptions,
  ),
);

hexo.config.hexo_htmlnano.postHtmlOptions = Object.freeze(
  Object.assign(
    default_postHtmlOptions,
    hexo.config.hexo_htmlnano.postHtmlOptions,
  ),
);

const options = Object.freeze(
  Object.assign(default_options, hexo.config.hexo_htmlnano),
);
hexo.config.hexo_htmlnano = options;

if (options.enable) {
  hexo.extend.filter.register("after_render:html", filter, options.priority);
}
