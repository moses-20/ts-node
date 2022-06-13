import { execute, log } from "./script.tools";

async function initTS() {
  const tsConfig =
    "tsc --init" +
    " --project ./temp.tsconfig.json" +
    " --target es6" +
    " --module commonjs" +
    " --moduleResolution node" +
    " --rootDir ." +
    " --baseUrl ./src" +
    " --allowJs false" +
    " --declaration false" +
    " --outDir ./dist" +
    " --esModuleInterop true" +
    " --forceConsistentCasingInFileNames true" +
    " --strict true" +
    " --noImplicitAny true" +
    " --strictNullChecks true" +
    " --alwaysStrict true" +
    " --noImplicitOverride true" +
    " --skipLibCheck true";

  return await execute(tsConfig);
}

async function initJest() {
  return await execute("ts-jest config:init");
}

async function init() {
  const ts = await initTS();
  if (ts.stderr) {
    return log(ts.stderr);
  }

  log(ts.stdout);

  const jest = await initJest();
  if (jest.stderr) {
    return log(jest.stderr);
  }

  log(jest.stdout);
}

init();
