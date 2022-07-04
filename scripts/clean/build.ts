import { rm } from "fs/promises";
import { join } from "path";

async function clean() {
  try {
    const cwd = process.cwd();
    const dist = join(cwd, "dist");

    await rm(dist, { recursive: true });
  } catch (error) {}
}

clean();
