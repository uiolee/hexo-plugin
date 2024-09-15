# hexo-htmlnano

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/hexo-htmlnano?logo=github)](https://github.com/uiolee/hexo-htmlnano/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/hexo-htmlnano?logo=github)](https://github.com/uiolee/hexo-htmlnano/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/hexo-htmlnano/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/hexo-htmlnano/compare/...main)
[![GitHub top language](https://img.shields.io/github/languages/top/uiolee/hexo-htmlnano?logo=github)](#hexo-htmlnano)
[![Coverage Status](https://coveralls.io/repos/github/uiolee/hexo-htmlnano/badge.svg?branch=main)](https://coveralls.io/github/uiolee/hexo-htmlnano?branch=main)
[![CI](https://github.com/uiolee/hexo-htmlnano/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/hexo-htmlnano/actions/workflows/ci.yml)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/uiolee/hexo-htmlnano?logo=librariesdotio)](https://libraries.io/github/uiolee/hexo-htmlnano#dependencies)

Minify HTML files with [htmlnano](https://www.npmjs.com/package/htmlnano)

## Install

[![NPM Version](https://img.shields.io/npm/v/@uiolee/hexo-htmlnano?logo=npm)](https://www.npmjs.com/package/@uiolee/hexo-htmlnano)
[![node-lts](https://img.shields.io/node/v-lts/@uiolee/hexo-htmlnano?logo=nodedotjs)](https://nodejs.org/)
[![NPM License](https://img.shields.io/npm/l/@uiolee/hexo-htmlnano)](./LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiolee/hexo-htmlnano?logo=npm)](#hexo-htmlnano)
[![NPM Downloads](https://img.shields.io/npm/dt/@uiolee/hexo-htmlnano?logo=npm)](#hexo-htmlnano)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@uiolee/hexo-htmlnano?logo=librariesdotio)](https://libraries.io/npm/@uiolee%2Fhexo-htmlnano/tree)

```bash
pnpm add @uiolee/hexo-htmlnano

# npm i @uiolee/hexo-htmlnano
```

## Configuration

### Default Configuration

> Defined in [src/index.ts](src/index.ts)

```yaml
hexo_htmlnano:
  enable: true
  priority: 999
  exclude: []
  presetName: "safe"
  htmlnanoOptions:
    removeEmptyAttributes: false
    collapseWhitespace: "conservative"
  postHtmlOptions:
```

### Customize

| name            | default                                  | type          | note                                                                                                                               |
| --------------- | ---------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| enable          | `true`                                   | boolean       | set `false` to disable this plugin.                                                                                                |
| priority        | `999`                                    | number        | define the [priority](https://hexo.io/api/filter#Synopsis) of this plugin.<br>Lower priority means that it will be executed first. |
| exclude         | `[]`                                     | array\<glob\> | Exclude files from being minified.<br>Support [globbing patterns](https://github.com/micromatch/micromatch#extended-globbing).     |
| presetName      | `"safe"`                                 | string        | the name of [htmlnano#Preset](https://htmlnano.netlify.app/presets).                                                               |
| htmlnanoOptions | see [src/index.ts#L10](src/index.ts#L10) | object        | see [htmlnamo#modules](https://htmlnano.netlify.app/modules) for more.                                                             |
| postHtmlOptions | see [src/index.ts#L20](src/index.ts#L20) | object        | see [posthtml#usage](https://github.com/posthtml/posthtml#usage) for more.                                                         |
