import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === "development" ? "/" : "/footballSite/",
//   build: {
//     outDir: "dist",
//   },
// }));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/footballSite/",
  build: {
    outDir: "dist",
  },
});

// main.tsx에서 browserRouter (basename="/footballSite") 이 속성 넣어야함
