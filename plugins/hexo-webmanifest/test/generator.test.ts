import { mkdir } from "node:fs/promises";
import {
  type DefaultConfigs,
  type DefaultOptions,
  defaultOptions,
} from "../src/default_config";
import { manifestGen } from "../src/generator";

beforeAll(() => {
  return mkdir(".temp", { recursive: true });
});
afterAll(() => {
  //   return rm(".temp", { recursive: true, force: true });
});

describe("manifestGen", () => {
  let options: DefaultOptions = { ...defaultOptions };
  let site = {
    title: "hexo-site",
    description: "a site powered by Hexo",
    url: "https://github.com/uiolee/hexo-plugin",
  };
  let configs: DefaultConfigs = {
    hexo_webmanifest: options,
    ...site,
  };

  beforeEach(() => {
    options = { ...defaultOptions };
    site = {
      title: "hexo-site",
      description: "a site powered by Hexo",
      url: "https://github.com/uiolee/hexo-plugin",
    };
    configs = { hexo_webmanifest: options, ...site };
    options.enable = true;
  });

  test("default", () => {
    const res = manifestGen.bind({ config: configs })({});
    return expect(res).resolves.not.toThrow();
  });

  test("default option", () => {
    const res = manifestGen.bind({ config: configs })({});
    return res.then((gen) => {
      expect(gen.path).toEqual(options.manifest_dest_path);
      expect(typeof gen.data).toEqual("string");
      expect(gen.data).not.toContain(options.manifest_basic.name);
      expect(gen.data).not.toContain(options.manifest_basic.description);
      expect(gen.data).toContain("start_url");
      expect(gen.data).toContain(configs.url);
    });
  });

  test("custom option", () => {
    configs.hexo_webmanifest.manifest_dest_path = "sub/manifest.json";
    configs.hexo_webmanifest.manifest_override = {
      theme_color: "#12c356",
      name: "overrideName",
      description: "overrideDesc",
    };
    const res = manifestGen.bind({ config: configs })({});
    return res.then((gen) => {
      expect(gen.path).toEqual(options.manifest_dest_path);
      expect(gen.data).not.toContain(configs.title);
      expect(gen.data).not.toContain(options.manifest_basic.name);
      expect(gen.data).toContain(options.manifest_override.description);
      expect(gen.data).toContain(options.manifest_override.name);
      expect(gen.data).toContain("start_url");
      expect(gen.data).toContain(configs.url);
    });
  });
});
