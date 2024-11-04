import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      implementation: sass,
      scss: {
        additionalData: ` 
          @use "@styles/mixins" as mixin;
          @use "@styles/mixins" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@hooks": "/src/hooks",
      "@redux": "/src/redux",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
    },
  },
});
