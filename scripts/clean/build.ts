import { rm } from "fs";
import { join } from "path";
import { white, green, blue, yellow } from "chalk";
import { log } from "../script.tools";

function clean() {
  const cwd = process.cwd();
  const dist = join(cwd, "dist");

  rm(dist, { recursive: true }, (err) => {
    if (err?.message.includes("no such file or directory")) {
      const msg = yellow("warning:", white(`${dist} folder cannot be found}`));
      const info = blue("info:", white("it may have been removed already"));

      log(msg);
      log(info);
    } else if (err) {
      log(err);
    } else {
      const msg = green("success:", white("finish cleaning build outputs"));

      log(msg);
    }
  });
}

clean();
