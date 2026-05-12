# hexo-workbox-build

A hexo plugin to run [workbox-build](https://www.npmjs.com/package/workbox-build) and provide convenient features of PWA and service worker.

## Feature

- run [workbox-build](https://www.npmjs.com/package/workbox-build) via passing through your custom options. ([generateSW mode](https://developer.chrome.com/docs/workbox/modules/workbox-build#generatesw_mode) or [injectManifest mode](https://developer.chrome.com/docs/workbox/modules/workbox-build#injectmanifest_mode))
- generate the script which using to register service-worker.
- reference the register script into html.

This plugin doesn't provide PWA support ready out of the box.

You need to know how to use [workbox-build](https://www.npmjs.com/package/workbox-build), configurate workbox strategy.

## Install

[![NPM Version](https://img.shields.io/npm/v/hexo-workbox-build?logo=npm)](https://www.npmjs.com/package/hexo-workbox-build)
[![node-lts](https://img.shields.io/node/v-lts/hexo-workbox-build?logo=nodedotjs)](https://nodejs.org/about/previous-releases#release-schedule)

```bash
pnpm add hexo-workbox-build

# npm i hexo-workbox-build
```

## Configuration

### Default Configuration

```yml
hexo_workbox_build:
  enable: false

  WB_runWorkboxBuild: true
  WB_swDest: ""
  WB_generateSWOptionsPath: ""
  WB_injectManifestOptionsPath: ""

  REG_generateRegister: true
  REG_registerScriptDest: "registerSW.js"
  # REG_registerScriptNjkPath: "" # default to internal nunjucks template

  REG_injector: true
  REG_injectorNjkString: '<script defer src="{{ REG_registerScriptDest }}"></script>'
```

### Example Configuration

```yml
hexo_workbox_build:
  enable: true

  WB_runWorkboxBuild: true
  WB_swDest: "sw.js"
  WB_generateSWOptionsPath: "workbox/genSWOption.js"
  # WB_injectManifestOptionsPath: "workbox/injMfOption.js"

  REG_generateRegister: true
  # REG_registerScriptDest: 'registerSW.js'
  # REG_registerScriptNjkPath: "" # default to internal nunjucks template

  REG_injector: true
  # REG_injectorNjkString: '<script defer src="{{ REG_registerScriptDest }}"></script>'
```

---

## Options

### enable or disable this plugin

| option name | value type | default value | note                                                                                             |
| ----------- | ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| `enbale`    | boolean    | `false`       | Control whether to enable [`hexo-workbox-build`](https://github.com/uiolee/hexo-workbox-build/). |

---

### ralated to workbox-build

| option name                    | value type | default value | note                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ---------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WB_runWorkboxBuild`           | boolean    | `true`        | Control whether to run [`worlbox-build`](https://developer.chrome.com/docs/workbox/modules/workbox-build/).                                                                                                                                                                                                                                                |
| `WB_swDest`                    | string     | ""            | Specify the name and path of `service-worker` that `worlbox-build` generated. (relative to `public` dir). <br><br>**equal to the [`swDest`](https://developer.chrome.com/docs/workbox/modules/workbox-build#properties_10) option in `worlbox-build`.**                                                                                                    |
| `WB_generateSWOptionsPath`     | string     | ""            | Need `WB_swDest` setting.<br>Specify the path of a js file. (relative to your hexo dir), which use default exports the arguments of [`generatesw-mode`](https://developer.chrome.com/docs/workbox/modules/workbox-build/#generatesw-mode) of [`worlbox-build`](https://developer.chrome.com/docs/workbox/modules/workbox-build/).                          |
| `WB_injectManifestOptionsPath` | string     | ""            | Need `WB_swDest` `generatesw-mode` setting.<br>Specify the path of a js file. (relative to your hexo dir), which use default exports the arguments of [`injectmanifest-mode`](https://developer.chrome.com/docs/workbox/modules/workbox-build/#injectmanifest-mode) of [`worlbox-build`](https://developer.chrome.com/docs/workbox/modules/workbox-build/) |

> Note: `injectmanifest-mode` depend on a built `sw.js`.
>
> It means you need to run `generatesw-mode` first in [`hexo-workbox-build`](https://github.com/uiolee/hexo-workbox-build/).

---

### ralated to register service worker

#### generate the code of registering service-worker

| option name                 | value type | default value   | note                                                                                                                                                         |
| --------------------------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `REG_generateRegister`      | boolean    | `true`          | Control whether to generater a javascript, which is use to register `service-worker`.                                                                        |
| `REG_registerScriptDest`    | string     | `registerSW.js` | Need `WB_swDest`.<br>Specify the path of the above javascript code generated. (relative to `public` dir)                                                     |
| `REG_registerScriptNjkPath` | string     | ""              | path of a nunjucks template of the javascript. (relative to your hexo dir)<br>Default template: [`./assets/registerScript.njk`](./assets/registerScript.njk) |

#### insert the registering code into html

| option name             | value type | default value                                                | note                                                                                                                            |
| ----------------------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `REG_injector`          | boolean    | `true`                                                       | Control whether to Inject the above javascript code into html `<script>`. <br>You can use `REG_injectorNjkString` to custom it. |
| `REG_injectorNjkString` | string     | `<script defer src="{{ REG_registerScriptDest }}"></script>` | Custom the `<scripts>` string.                                                                                                  |

---
