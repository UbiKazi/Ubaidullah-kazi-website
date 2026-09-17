import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { fileURLToPath } from "node:url";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

// Single-file preview of the same components, with hash routing and inlined assets.
export default defineConfig({
  root: r("."),
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: [
      { find: "@/lib/platform", replacement: r("./platform.tsx") },
      { find: "@/lib/assets", replacement: r("./assets.ts") },
      { find: /^@\//, replacement: r("../src/") + "/" },
    ],
  },
  build: {
    outDir: r("../preview-dist"),
    emptyOutDir: true,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 5000,
  },
  logLevel: "warn",
});
