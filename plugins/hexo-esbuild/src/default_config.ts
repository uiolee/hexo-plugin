import type { TransformOptions } from "esbuild";

interface Hexo_Esbuild_Options {
  enable?: boolean;
  [key: string]: Filter_Options | boolean | undefined;
}
interface Filter_Options {
  enable?: boolean;
  after_render: string;
  priority: number;
  exclude?: Array<string>;
  esbuildTransformOptions?: TransformOptions;
}

const default_options: Hexo_Esbuild_Options = {
  enable: true,
  js: {
    enable: true,
    after_render: "js",
    priority: 999,
    exclude: ["**.min.js"],
    esbuildTransformOptions: {
      loader: "js",
      minify: true,
      logLevel: "warning",
    },
  },
  css: {
    enable: true,
    after_render: "css",
    priority: 999,
    exclude: ["**.min.css"],
    esbuildTransformOptions: {
      loader: "css",
      minify: true,
      logLevel: "warning",
    },
  },
};
const default_config = Object.freeze({ hexo_esbuild: default_options });

export default default_config;
export {
  default_config,
  default_options,
  Hexo_Esbuild_Options,
  Filter_Options,
};
