import { Config } from "../types.js";

const setNameDefault = (defaultName: string, config: Config): Config => {
  return {
    ...{
      name: defaultName,
    },
    ...config,
  };
};

export { setNameDefault };
export default setNameDefault;
