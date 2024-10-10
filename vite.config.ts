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
      external: './node_modules/.pnpm/@aptos-labs+wallet-adapter-core@4.18.0_dcfd4d60db531082fddbc228bda87077/node_modules/@aptos-labs/wallet-adapter-core/dist/index.mjs',
        input: {
          main: path.resolve("index.html"),
          index: path.resolve(root, "pages", "index.jsx"),
          FungibleAssetBalances: path.resolve(root, "pages", "FungibleAssetBalances.tsx"),
          TestnetAssetBalances: path.resolve(root, "pages", "TestnetAssetBalances.tsx"),
          
        }
      }
    
         
  },

});
