import { defineConfig, loadEnv } from "vite";
import path from "node:path";

// Variabel dari .env dimuat agar tes integrasi (RUN_DB_TESTS=1) memakai DATABASE_URL asli.
const fileEnv = loadEnv("test", process.cwd(), "");

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    env: {
      DATABASE_URL: fileEnv.DATABASE_URL ?? "postgresql://x:x@localhost:5432/x",
      AUTH_SECRET: fileEnv.AUTH_SECRET ?? "x".repeat(32),
      APP_URL: fileEnv.APP_URL ?? "http://localhost:3000",
    },
  },
});
