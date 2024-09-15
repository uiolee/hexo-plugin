import * as buildWorkbox from "../src/buildWorkbox";
import { mkdir, writeFile } from "node:fs/promises";
import {
  defaultOptions,
  DefaultConfigs,
  DefaultOptions,
} from "../src/default_config";

import Hexo from "hexo";
import { join } from "node:path";

beforeAll(() => {
  return mkdir(".temp", { recursive: true });
});
afterAll(() => {
  //   return rm(".temp", { recursive: true, force: true });
});

describe("generateSW", () => {
  let options: DefaultOptions = { ...defaultOptions };
  let configs: DefaultConfigs | Hexo["config"] = {
    hexo_workbox_build: options,
  };
  const hexo = new Hexo(".temp", { silent: true });
  beforeEach(() => {
    options = { ...defaultOptions };
    configs = { hexo_workbox_build: options };
    options.enable = true;

    hexo.config = { ...hexo.config, ...configs };
    options = hexo.config.hexo_workbox_build;
    return hexo.init();
  });
  test("default", () => {
    const data = { fegrhtjyg: `${Math.random()}` };
    const res = buildWorkbox.buildWorkboxFn.bind(hexo)(data);
    return expect(res).resolves.toBe(data);
  });
  test("enable", () => {
    options.WB_swDest = "sw.js";
    options.WB_generateSWOptionsPath = "gSWOption.js";

    return writeFile(
      join(".temp", options.WB_generateSWOptionsPath),
      `
module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**.{css,woff2,json,js}',
        '**/*.{css,woff2,json,js}',
        '{404,offline}.html',
        'about/*.html',
        '*.{ico,png}',
    ],
    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 52428800,
    navigationPreload: true,
    // navigateFallback: '/offline.html',
    navigateFallbackDenylist:[],
    runtimeCaching: [

        {
            urlPattern: new RegExp(/\.(?:xml|txt|json)$/),
            handler: 'NetworkOnly',
        },
        {
            urlPattern: new RegExp(/\.(?:js)$/),
            handler: 'CacheFirst',
            options: {
                cacheName: 'js',
            },
        },
        {
            urlPattern: new RegExp(/\.(?:css)$/),
            handler: 'CacheFirst',
            options: {
                cacheName: 'css',
            },
        },
    ],
};
`,
    ).then(() => {
      const data = { fegrhtjyg: `${Math.random()}` };
      const res = buildWorkbox.buildWorkboxFn.bind(hexo)(data);
      // return expect(res).resolves.toBe(data);
    });
  });
});
