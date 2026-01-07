import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), tagger()],
  base: "/", // 👈 VERY IMPORTANT
  build: {
    outDir: "dist", // 👈 CHANGE build → dist
    chunkSizeWarningLimit: 2000,
  },
});
