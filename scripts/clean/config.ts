import { unlink } from "fs";
import { join } from "path";
import { white, green, yellow } from "chalk";
import { log } from "../script.tools";

function clean() {
  const cwd = process.cwd();
  const files = ["tsconfig.json", "jest.config.js"];

  files.forEach(async (file) => {
    unlink(join(cwd, file), (err) => {
      if (err?.message.includes("no such file or directory")) {
        const msg = yellow("warning:", white(`${file} not found in ${cwd}`));

        log(msg);
      } else if (err) {
        log(err);
      } else {
        const msg = green("success:", white("finish cleaning project configs"));

        log(msg);
      }
    });
  });
}

clean();
