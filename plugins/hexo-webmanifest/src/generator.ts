import type Hexo from "hexo";
import type { DefaultOptions } from "./default_config";

const transform = <
  TSource extends Record<string, unknown>,
  TMapping extends Record<string, keyof TSource>,
>(
  source: TSource,
  mapping: TMapping,
) => {
  const target = {} as { [K in keyof TMapping]: TSource[TMapping[K]] };

  try {
    for (const [targetKey, sourceKey] of Object.entries(mapping) as Array<
      [keyof TMapping, TMapping[keyof TMapping]]
    >) {
      target[targetKey as keyof TMapping] = source[sourceKey];
    }
    return target;
  } catch (err) {
    console.error(err);
    return target;
  }
};

async function manifestGen(this: Hexo, _locals: object): Promise<object> {
  const siteConfig = this.config;
  const options: DefaultOptions = this.config.hexo_webmanifest;
  const {
    manifest_dest_path,
    manifest_basic,
    manifest_fieldMap,
    manifest_override,
  } = options;

  const manifest_mapping = transform(siteConfig, manifest_fieldMap);

  const shallow_merge = {
    ...manifest_basic,
    ...manifest_mapping,
    ...manifest_override,
  };

  return {
    path: manifest_dest_path,
    data: JSON.stringify(shallow_merge, null, 2),
  };
}

export { manifestGen };
