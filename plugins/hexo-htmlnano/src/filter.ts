import htmlnano from "htmlnano";
import micromatch from "micromatch";
import type hexo from "hexo";
import type { HtmlnanoPreset } from "htmlnano";
import type { StoreFunctionData } from "hexo/dist/extend/renderer";

function filter(
  this: hexo,
  html: string,
  data: StoreFunctionData,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const { path } = data;

    const options = this.config.hexo_htmlnano;
    const { exclude } = options;

    if (path && exclude && exclude.length) {
      if (micromatch.isMatch(path, exclude)) {
        resolve(html);
      }
    }

    const { htmlnanoOptions, postHtmlOptions, presetName } = options;

    let prestConfig: HtmlnanoPreset;
    switch (presetName) {
      case "safe":
        prestConfig = htmlnano.presets.safe;
        break;
      case "ampSafe":
        prestConfig = htmlnano.presets.ampSafe;
        break;
      case "max":
        prestConfig = htmlnano.presets.max;
        break;
      default:
        prestConfig = htmlnano.presets.safe;
        this.log.warn(
          `htmlnano: wrong preset "${presetName}"! Fallback to preset "safe"`,
        );
        break;
    }

    htmlnano
      .process(
        html,
        htmlnanoOptions,
        prestConfig,
        Object.keys(postHtmlOptions).length ? postHtmlOptions : undefined,
      )
      .then((result) => {
        resolve(result.html);
      })
      .catch((err) => {
        this.log.error("htmlnano: ", err);
        reject(err);
      });
  });
}

export default filter;
export { filter };
