import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-video",
            entry: "ilw-video.ts",
            fileName: "ilw-video",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/],
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-video.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
