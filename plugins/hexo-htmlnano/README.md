# hexo-htmlnano

Minify HTML files with [htmlnano](https://www.npmjs.com/package/htmlnano)

## Install

[![NPM Version](https://img.shields.io/npm/v/@uiolee/hexo-htmlnano?logo=npm)](https://www.npmjs.com/package/@uiolee/hexo-htmlnano)
[![node-lts](https://img.shields.io/node/v-lts/@uiolee/hexo-htmlnano?logo=nodedotjs)](https://nodejs.org/about/previous-releases#release-schedule)

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
