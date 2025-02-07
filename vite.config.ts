import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins:[
        dts({ tsconfigPath: "tsconfig-build.json" }),
    ],
  build: {
    copyPublicDir: false,
    lib: {
        entry: 'lib/main.ts',
        formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
