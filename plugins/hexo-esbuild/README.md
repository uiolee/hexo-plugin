# hexo-esbuild

Transform JavaScript, CSS, TypeScript, and JSX files
via [esbuild](https://esbuild.github.io) [Transformer](https://esbuild.github.io/api/#transform) API.

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
  enable: true # boolean. enable hexo-esbuild.
  js: # the filter option for js.
    enable: true # boolean. enable js filter.
    after_render: "js" # string. hexo filter hook. support https://hexo.io/api/filter#after-render
    priority: 999 # number. hexo filter priority. Lower priority means that it will be executed first
    exclude: # Array<string>. exclude files to be transformed. which will be passed to `micromatch`.
      - "**.min.js"
    esbuildTransformOptions: # the TransformOptions of esbuild. https://esbuild.github.io/api/#transform
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
# add more configuration if you want.
```
