# hexo-esbuild

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/hexo-esbuild?logo=github)](https://github.com/uiolee/hexo-esbuild/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/hexo-esbuild?logo=github)](https://github.com/uiolee/hexo-esbuild/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/hexo-esbuild/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/hexo-esbuild/compare/...main)
[![GitHub top language](https://img.shields.io/github/languages/top/uiolee/hexo-esbuild?logo=github)](#hexo-esbuild)
[![Coverage Status](https://coveralls.io/repos/github/uiolee/hexo-esbuild/badge.svg?branch=main)](https://coveralls.io/github/uiolee/hexo-esbuild?branch=main)
[![CI](https://github.com/uiolee/hexo-esbuild/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/hexo-esbuild/actions/workflows/ci.yml)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/uiolee/hexo-esbuild?logo=librariesdotio)](https://libraries.io/github/uiolee/hexo-esbuild#dependencies)

Minify JavaScripts, CSS files via [esbuild](https://esbuild.github.io) [Transformer](https://esbuild.github.io/api/#transform).

## Install

[![NPM Version](https://img.shields.io/npm/v/hexo-esbuild?logo=npm)](https://www.npmjs.com/package/hexo-esbuild)
[![node-lts](https://img.shields.io/node/v-lts/hexo-esbuild?logo=nodedotjs)](https://nodejs.org/)
[![NPM License](https://img.shields.io/npm/l/hexo-esbuild)](./LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/hexo-esbuild?logo=npm)](#hexo-esbuild)
[![NPM Downloads](https://img.shields.io/npm/dt/hexo-esbuild?logo=npm)](#hexo-esbuild)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/hexo-esbuild?logo=librariesdotio)](https://libraries.io/npm/hexo-esbuild/tree)

```bash
pnpm add hexo-esbuild

# npm i hexo-esbuild
```

## Configuration

### Default Configuration

> Defined in [src/default_config.ts](src/default_config.ts)

```yaml
hexo_esbuild:
  enable: true
  js:
    enable: true
    after_render: "js" # hexo filter hook. support https://hexo.io/api/filter#after-render
    priority: 999 # hexo filter priority. Lower priority means that it will be executed first
    exclude:
      - "**.min.js"
    esbuildTransformOptions: # the esbuild transform options. https://esbuild.github.io/api/#transform
      loader: "js"
      minify: true
      logLevel: "warning"
  css:
    enable: true
    after_render: "css"
    priority: 999
    exclude:
      - "**.min.css"
    esbuildTransformOptions:
      loader: "css"
      minify: true
      logLevel: "warning"
```
