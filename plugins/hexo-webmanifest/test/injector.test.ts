import Hexo from "hexo";
import {
  type DefaultConfigs,
  type DefaultOptions,
  defaultOptions,
} from "../src/default_config";
import { inject_link } from "../src/injector";

describe("inject_link", () => {
  let options: DefaultOptions = { ...defaultOptions };
  let configs: DefaultConfigs | Hexo["config"] = {
    hexo_webmanifest: options,
  };
  const hexo = new Hexo(".temp", { silent: true });

  beforeEach(() => {
    options = { ...defaultOptions };
    configs = { hexo_webmanifest: options };
    options.enable = true;

    hexo.config = { ...hexo.config, ...configs };
    options = hexo.config.hexo_webmanifest;
    return hexo.init();
  });

  test("default options", () => {
    const url_for = hexo.extend.helper.get("url_for").bind(hexo);
    const res = inject_link(options, hexo);

    expect(res).toContain(`<link rel="manifest"`);
    expect(res).toContain(`href="${url_for(options.manifest_dest_path)}"`);
  });

  test("custom path", () => {
    options.manifest_dest_path = "pwa/manifest.json";
    const url_for = hexo.extend.helper.get("url_for").bind(hexo);
    const res = inject_link(options, hexo);

    expect(res).toContain(
      `<link rel="manifest" href="${url_for(options.manifest_dest_path)}" />`,
    );
  });

  test("custom path start with slash", () => {
    options.manifest_dest_path = "/path/manifest.json";
    const url_for = hexo.extend.helper.get("url_for").bind(hexo);
    const res = inject_link(options, hexo);

    expect(res).toContain(`<link`);
    expect(res).toContain(`href="${url_for(options.manifest_dest_path)}"`);
  });
});
