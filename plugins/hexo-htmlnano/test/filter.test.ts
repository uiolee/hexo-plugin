import {
  default_htmlnanoOptions,
  default_postHtmlOptions,
  default_options,
} from "../src/default_config";
import { filter } from "../src/filter";

describe("filter", () => {
  let default_config = {};
  let html_str = "";
  let default_html_str;
  beforeAll(() => {
    default_html_str = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    <meta charset="utf-8" />
    <meta name="generator" content="pandoc" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=yes"
    />
    <title>Untitled</title>
    <style>
      html {
        color: #1a1a1a;
        background-color: #fdfdfd;
      }
      body {
        margin: 0 auto;
        max-width: 36em;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 50px;
        padding-bottom: 50px;
        hyphens: auto;
        overflow-wrap: break-word;
        text-rendering: optimizeLegibility;
        font-kerning: normal;
      }
      @media (max-width: 600px) {
        body {
          font-size: 0.9em;
          padding: 12px;
        }
        h1 {
          font-size: 1.8em;
        }
      }
      @media print {
        html {
          background-color: white;
        }
        body {
          background-color: transparent;
          color: black;
          font-size: 12pt;
        }
        p,
        h2,
        h3 {
          orphans: 3;
          widows: 3;
        }
        h2,
        h3,
        h4 {
          page-break-after: avoid;
        }
      }
      p {
        margin: 1em 0;
      }
      a {
        color: #1a1a1a;
      }
      a:visited {
        color: #1a1a1a;
      }
      img {
        max-width: 100%;
      }
      svg {
        height: auto;
        max-width: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.4em;
      }
      h5,
      h6 {
        font-size: 1em;
        font-style: italic;
      }
      h6 {
        font-weight: normal;
      }
      ol,
      ul {
        padding-left: 1.7em;
        margin-top: 1em;
      }
      li > ol,
      li > ul {
        margin-top: 0;
      }
      blockquote {
        margin: 1em 0 1em 1.7em;
        padding-left: 1em;
        border-left: 2px solid #e6e6e6;
        color: #606060;
      }
      code {
        font-family: Menlo, Monaco, Consolas, "Lucida Console", monospace;
        font-size: 85%;
        margin: 0;
        hyphens: manual;
      }
      pre {
        margin: 1em 0;
        overflow: auto;
      }
      pre code {
        padding: 0;
        overflow: visible;
        overflow-wrap: normal;
      }
      .sourceCode {
        background-color: transparent;
        overflow: visible;
      }
      hr {
        background-color: #1a1a1a;
        border: none;
        height: 1px;
        margin: 1em 0;
      }
      table {
        margin: 1em 0;
        border-collapse: collapse;
        width: 100%;
        overflow-x: auto;
        display: block;
        font-variant-numeric: lining-nums tabular-nums;
      }
      table caption {
        margin-bottom: 0.75em;
      }
      tbody {
        margin-top: 0.5em;
        border-top: 1px solid #1a1a1a;
        border-bottom: 1px solid #1a1a1a;
      }
      th {
        border-top: 1px solid #1a1a1a;
        padding: 0.25em 0.5em 0.25em 0.5em;
      }
      td {
        padding: 0.125em 0.5em 0.25em 0.5em;
      }
      header {
        margin-bottom: 4em;
        text-align: center;
      }
      #TOC li {
        list-style: none;
      }
      #TOC ul {
        padding-left: 1.3em;
      }
      #TOC > ul {
        padding-left: 0;
      }
      #TOC a:not(:hover) {
        text-decoration: none;
      }
      code {
        white-space: pre-wrap;
      }
      span.smallcaps {
        font-variant: small-caps;
      }
      div.columns {
        display: flex;
        gap: min(4vw, 1.5em);
      }
      div.column {
        flex: auto;
        overflow-x: auto;
      }
      div.hanging-indent {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }
      /* The extra [class] is a hack that increases specificity enough to
       override a similar rule in reveal.js */
      ul.task-list[class] {
        list-style: none;
      }
      ul.task-list li input[type="checkbox"] {
        font-size: inherit;
        width: 0.8em;
        margin: 0 0.8em 0.2em -1.6em;
        vertical-align: middle;
      }
      .display.math {
        display: block;
        text-align: center;
        margin: 0.5rem auto;
      }
    </style>
  </head>
  <body>
    <p><em>Hello</em> world!</p>
    <!-- uselesscomment -->
  </body>
</html>
`;
  });
  beforeEach(() => {
    const htmlnanoOptions = { ...default_htmlnanoOptions, ...{} };
    const postHtmlOptions = { ...default_postHtmlOptions, ...{} };
    const options = {
      ...default_options,
      ...{ htmlnanoOptions, postHtmlOptions },
    };
    default_config = { hexo_htmlnano: options };
    html_str = String(default_html_str);
  });

  test("default", async () => {
    const res = filter.bind({ config: default_config })(html_str, {
      path: "test.html",
    });
    await expect(res).resolves.not.toThrow();
    await expect(res).resolves.toContain("Hello");
    await expect(res).resolves.not.toContain("uselesscomment");
  });
  test("fallback preset", async () => {
    default_config.hexo_htmlnano.presetName = "fweioa";
    const res = filter.bind({
      config: default_config,
      log: { warn: console.warn },
    })(html_str, {
      path: "test.html",
    });
    await expect(res).resolves.not.toThrow();
  });
});
