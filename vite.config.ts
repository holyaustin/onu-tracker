import path from "path";
import { resolve } from 'path'
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
        interop: "auto",
      },
      external:
        './node_modules/.pnpm',
        input: {
         // main: path.resolve("index.html"),
          main: resolve(__dirname, "index.html"),
          mainnet: resolve(__dirname, "frontend/pages/mainnet/index.html"),
          testnet: resolve(__dirname, "frontend/pages/testnet/index.html"),
          
        }
    },
  },

  server: {
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend"),
    },
  },

});