# [hexo-symbols-count-time-2](https://github.com/uiolee/hexo-symbols-count-time-2)

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/hexo-symbols-count-time-2?logo=github)](https://github.com/uiolee/hexo-symbols-count-time-2/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/hexo-symbols-count-time-2?logo=github)](https://github.com/uiolee/hexo-symbols-count-time-2/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/hexo-symbols-count-time-2/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/hexo-symbols-count-time-2/compare/...main)
[![GitHub top language](https://img.shields.io/github/languages/top/uiolee/hexo-symbols-count-time-2?logo=github)](#hexo-symbols-count-time-2)
[![Coverage Status](https://coveralls.io/repos/github/uiolee/hexo-symbols-count-time-2/badge.svg?branch=main)](https://coveralls.io/github/uiolee/hexo-symbols-count-time-2?branch=main)
[![CI](https://github.com/uiolee/hexo-symbols-count-time-2/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/hexo-symbols-count-time-2/actions/workflows/ci.yml)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/uiolee/hexo-symbols-count-time-2?logo=librariesdotio)](https://libraries.io/github/uiolee/hexo-symbols-count-time-2#dependencies)

> This a fork of [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

Symbols count and time to read for articles in [Hexo](https://github.com/hexojs/hexo) blog.

Better than [`hexo-reading-time`](https://github.com/ierhyna/hexo-reading-time) and faster than [`hexo-wordcount`](https://github.com/willin/hexo-wordcount). No external dependencies.

## Installation

[![NPM Version](https://img.shields.io/npm/v/hexo-symbols-count-time-2?logo=npm)](https://www.npmjs.com/package/hexo-symbols-count-time-2)
[![node-lts](https://img.shields.io/node/v-lts/hexo-symbols-count-time-2?logo=nodedotjs)](https://nodejs.org/)
[![NPM License](https://img.shields.io/npm/l/hexo-symbols-count-time-2)](./LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/hexo-symbols-count-time-2?logo=npm)](#hexo-symbols-count-time-2)
[![NPM Downloads](https://img.shields.io/npm/dt/hexo-symbols-count-time-2?logo=npm)](#hexo-symbols-count-time-2)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/hexo-symbols-count-time-2?logo=librariesdotio)](https://libraries.io/npm/hexo-symbols-count-time-2/tree)

```sh
pnpm add hexo-symbols-count-time-2
```

or

```sh
npm i hexo-symbols-count-time-2
```

## Configuration

You can set options of hexo-symbols-count-time-2 in the **Hexo's `_config.yml`** (which locates in the root dir of your blog):

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
  exclude_codeblock: false
  awl: 4
  wpm: 275
  suffix: "mins."
```

If `symbols_count_time` option is not specified, the default parameters will be used.

## Parameters

- `awl` – Average Word Length (chars count in word). Default: `4`. You can check this [here](https://charactercounttool.com).
  - CN &asymp; `2`
  - EN &asymp; `5`
  - RU &asymp; `6`
- `wpm` – Words Per Minute. Default: `275`. You can check this [here](https://wordcounter.net).
  - Slow &asymp; `200`
  - Normal &asymp; `275`
  - Fast &asymp; `350`
- `suffix` – If time to read less then 60 minutes, added suffix as string parameter.\
  If not defined, `mins.` will be used as default.
- `exclude_codeblock` – Allow to exclude all content inside code blocks for more accurate words counting.\
  If not defined, `false` will be used as default.

**Note for Chinese users:** because in Chinese language average word length about `~1.5` and if you at most cases write posts in Chinese (without mixed English), recommended to set `awl` to `2` and `wpm` to `300`.\
But if you usualy mix your posts with English, `awl` to `4` and `wpm` to `275` will be nice.

## NexT theme

This plugin integrated in «NexT» and after plugin enabled in main Hexo config, you may adjust options in NexT config:

```yml
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
```

## Templates

### Symbols Count

```js
{
  {
    symbolsCount(post);
  }
}
```

### Symbols Time

```js
{
  {
    symbolsTime(post);
  }
}
```

Or with predefined parameters:

```js
{
  {
    symbolsTime(post, awl, wpm, suffix);
  }
}
```

### Symbols Count Total

```js
{
  {
    symbolsCountTotal(site);
  }
}
```

### Symbols Time Total

```js
{
  {
    symbolsTimeTotal(site);
  }
}
```

Or with predefined parameters:

```js
{
  {
    symbolsTimeTotal(site, awl, wpm, suffix);
  }
}
```

### Renderers syntax

SWIG / Nunjucks: `{{` `template` `}}`\
EJS: `<%-` `template` `%>`\
Jade: `span=` `template`
