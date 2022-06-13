import { exec } from "child_process";
import { promisify } from "util";

const execute = promisify(exec);
const log = console.log;

export { execute, log };
