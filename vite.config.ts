import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins:[
        dts({ tsconfigPath: "tsconfig-build.json" }),
    ],
  build: {
    copyPublicDir: false,
    lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
