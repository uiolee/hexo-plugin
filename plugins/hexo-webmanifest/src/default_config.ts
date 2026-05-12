const defaultOptions = {
  enable: true,

  enable_generate_manifest: true,

  manifest_dest_path: "site.webmanifest",

  manifest_basic: {
    name: "hexo-webmanifest",
    description: "You should not see this line :D",
    display: "standalone",
  },

  manifest_override: {},

  manifest_fieldMap: {
    name: "title",
    description: "description",
    start_url: "url",
  },

  enable_inject_tag_link: true,
};

const defaultConfigs = {
  hexo_webmanifest: defaultOptions,
};

type DefaultOptions = typeof defaultOptions;
type typeC = typeof defaultConfigs;
interface DefaultConfigs extends typeC {
  [prop: string]: unknown;
}
export default defaultConfigs;
export {
  type DefaultConfigs,
  type DefaultOptions,
  defaultConfigs,
  defaultOptions,
  defaultOptions as hexo_webmanifest,
};
