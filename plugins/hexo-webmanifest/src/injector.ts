import type Hexo from "hexo";
import type { DefaultOptions } from "./default_config";

const inject_link = (options: DefaultOptions, hexo: Hexo) => {
  const url_for = hexo.extend.helper.get("url_for").bind(hexo);

  const { manifest_dest_path } = options;
  const href = url_for(manifest_dest_path);

  return `<link rel="manifest" href="${href}" />`;
};

export { inject_link };
