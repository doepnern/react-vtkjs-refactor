import { defineConfig } from "vite";
const path = require("path");
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "react-vtkjs-refactor",
      fileName: (format) => `react-vtkjs-refactor.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { react: "react", "react-dom": "ReactDOM" },
      },
    },
  },
  plugins: [react()],
});
