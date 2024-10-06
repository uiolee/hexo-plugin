import { HtmlnanoOptions } from "htmlnano";

interface PostHtmlOptions {
  [key: string]: unknown;
}
interface Hexo_Htmlnano_Options {
  enable?: boolean;
  priority: number;
  exclude?: Array<string>;
  presetName?: string;
  htmlnanoOptions?: HtmlnanoOptions;
  postHtmlOptions?: PostHtmlOptions;
}

const default_htmlnanoOptions: HtmlnanoOptions = {
  removeEmptyAttributes: false, // Disable the module "removeEmptyAttributes"
  collapseWhitespace: "conservative", // Pass options to the module "collapseWhitespace"
};

const default_postHtmlOptions: PostHtmlOptions = {
  // sync: false, // https://github.com/posthtml/posthtml#usage
  // lowerCaseTags: true, // https://github.com/posthtml/posthtml-parser#options
  // quoteAllAttributes: false, // https://github.com/posthtml/posthtml-render#options
};
const default_options: Hexo_Htmlnano_Options = {
  enable: true,
  priority: 999,
  exclude: [],
  presetName: "safe",
};
const default_config = Object.freeze({ hexo_htmlnano: default_options });

export default default_config;
export {
  default_config,
  default_options,
  default_htmlnanoOptions,
  default_postHtmlOptions,
  Hexo_Htmlnano_Options,
};
