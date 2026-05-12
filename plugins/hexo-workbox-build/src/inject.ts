import type Hexo from "hexo";
import type { DefaultOptions } from "./default_config";

import { renderString } from "nunjucks";

const REG_injector = (options: DefaultOptions, hexo: Hexo) => {
  const url_for = hexo.extend.helper.get("url_for").bind(hexo);
  const { REG_registerScriptDest, REG_injectorNjkString } = options;
  const njkString = REG_injectorNjkString
    ? REG_injectorNjkString
    : `<script defer src="{{ REG_registerScriptDest }}"></script>`;
  return renderString(njkString, {
    REG_registerScriptDest: url_for(REG_registerScriptDest),
  });
};

export { REG_injector };
