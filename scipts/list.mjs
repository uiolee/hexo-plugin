import { join } from "node:path/posix";
import { spawn } from "node:child_process";
import { readFile, readdir, writeFile } from "node:fs/promises";

console.time("list.mjs");

const WORKSPLACE = "plugins/";
const WORKSPLACE_ALIASES = "workspace:^";

const list_start = "<!-- packages-list start -->";
const list_end = "<!-- packages-list end -->";
const README_file = "README.md";

const spawna = (cmd, args, opts) => {
  return new Promise((resolve, reject) => {
    const argsArray = Array.isArray(args)
      ? args
      : args.trim().replace(/ {2}/, "").split(" ");
    const cp = spawn(cmd.trim(), argsArray, opts);
    cp.stdout.setEncoding("utf8");
    cp.stdout.on("data", (data) => {
      console.log(cmd, data);
    });
    cp.stderr.setEncoding("utf8");
    cp.stderr.on("data", (data) => {
      console.warn(cmd, data);
    });
    cp.on("error", (err) => {
      console.error(cmd, "error: ", err);
      reject(err);
    });
    cp.on("exit", (code) => {
      console.log(cmd, "exit", code);
    });
    cp.on("close", (code) => {
      if (code !== 0) {
        console.error(cmd, "close: ", code);
        reject(code);
      } else {
        console.info(cmd, "close: ", code);
        resolve(code);
      }
    });
  });
};

const readRootPkg = () => {
  return readFile("package.json", {
    encoding: "utf8",
  }).then((res) => {
    return JSON.parse(res);
  });
};

const readWorksplacePkgsJson = () => {
  return readdir(WORKSPLACE).then((pkgsDirName) => {
    return Promise.all(
      pkgsDirName.map((name) => {
        return readFile(join(WORKSPLACE, name, "package.json"), {
          encoding: "utf8",
        })
          .catch((err) => {
            console.warn("readfile error: ", err);
          })
          .then((res) => {
            if (res) {
              return JSON.parse(res);
            }
          });
      }),
    );
  });
};

console.log(process.argv);

console.log();

const main = async () => {
  const [readme, worksplacePkgs, rootPkg] = await Promise.all([
    readFile(README_file, { encoding: "utf8" }),
    readWorksplacePkgsJson(),
    readRootPkg(),
  ]);

  const getLine = (pkg) => {
    const grid = [];
    grid.push(pkg.name);
    grid.push(
      `[./${pkg.repository.directory}/](./${pkg.repository.directory}/)`,
    );
    grid.push(pkg.version);
    // grid.push(pkg.engines?.node);
    grid.push(Object.keys(pkg.dependencies || {}).length);
    // grid.push(Object.keys(pkg.devDependencies || {}).length);
    // grid.push(pkg.license);
    grid.push(
      `[![npm](https://img.shields.io/npm/v/${pkg.name}?logo=npm&label=%20)](https://www.npmjs.com/package/${pkg.name})`,
    );
    grid.push(
      `[![npm](https://img.shields.io/npm/dm/${pkg.name}?logo=npm&label=%20)](https://www.npmjs.com/package/${pkg.name})`,
    );
    return "|" + grid.join("|") + "|\n";
  };

  const splice = (startStr, endStr, item) => {
    const startIndex = ls.indexOf(startStr) + 1;
    const endIndex = ls.indexOf(endStr);
    if (endIndex < 0) {
      item = startStr + "\n" + item + "\n" + endStr + "\n";
    }
    ls.splice(startIndex, endIndex - startIndex, ...item.split("\n"));
  };

  let item = "";
  item += (() => {
    const grid = [];
    grid.push("name");
    grid.push("path");
    grid.push("version");
    // grid.push("node");
    grid.push("deps");
    // grid.push('devDeps');
    // grid.push('license');
    grid.push("npmjs");
    grid.push("download");
    return "|" + grid.join("|") + "|\n|" + "---|".repeat(grid.length) + "\n";
  })();

  worksplacePkgs.forEach((pkg) => {
    item += getLine(pkg);
  });

  console.log(item);

  let ls = readme.split("\n");
  console.log(ls.length);
  splice(list_start, list_end, item);
  console.log(ls.length);

  await Promise.all([
    writeFile(README_file, ls.join("\n"), { encoding: "utf8" }),
  ]);
};

const post = async () => {
  //   await spawna('git', `add ${destDir}/package.json pnpm-lock.yaml README.md`);
  await spawna("pnpm ", `exec prettier -w ${README_file}`);
};

await main();
await post();
console.timeEnd("list.mjs");
