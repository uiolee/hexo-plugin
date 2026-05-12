const defaultOptions = {
  enable: false,

  WB_runWorkboxBuild: true,
  WB_swDest: "",
  WB_generateSWOptionsPath: "",
  WB_injectManifestOptionsPath: "",

  REG_generateRegister: true,
  REG_registerScriptDest: "registerSW.js",
  REG_registerScriptNjkPath: "",

  REG_injector: true,
  REG_injectorNjkString:
    '<script defer src="{{ REG_registerScriptDest }}"></script>',
};
const defaultConfigs = {
  hexo_workbox_build: defaultOptions,
};

type DefaultOptions = typeof defaultOptions;
type typeC = typeof defaultConfigs;
interface DefaultConfigs extends typeC {
  [prop: string]: unknown;
}
export default defaultConfigs;
export {
  defaultConfigs,
  defaultOptions,
  defaultOptions as hexo_workbox_build,
  DefaultOptions,
  DefaultConfigs,
};
