import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "./frontend");

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend"),
      
    },
  },
  build: {
    outDir: "build",
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        input: {
          main: path.resolve("index.html"),
          index: path.resolve(root, "pages", "index.jsx"),
          FungibleAssetBalances: path.resolve(root, "pages", "FungibleAssetBalances.tsx"),
          TestnetAssetBalances: path.resolve(root, "pages", "TestnetAssetBalances.tsx"),
          
        }
      }
    
         
  },

});
