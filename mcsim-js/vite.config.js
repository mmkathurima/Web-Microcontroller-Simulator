import * as path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    appType: 'mpa',
    build: {
        target: 'modules',
        outDir: '../wwwroot/js',
        lib: {
            entry: path.resolve(__dirname, './src/smb.mjs'),
            name: "mcsim-js",
            fileName: (format) => `mcsim.${format}.js`,
        },
    }
});