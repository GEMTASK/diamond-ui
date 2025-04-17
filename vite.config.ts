import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: "main"
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  }
});
