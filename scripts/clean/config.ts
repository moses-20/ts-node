import { rm } from "fs/promises";
import { join } from "path";

function clean() {
  const cwd = process.cwd();
  const files = ["tsconfig.json", "jest.config.js", "prisma/migrations"];

  files.forEach(async (file) => {
    try {
      await rm(join(cwd, file), { recursive: true });
    } catch (error) {}
  });
}

clean();
