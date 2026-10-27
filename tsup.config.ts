import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    // el componente tiene estado y animaciones: en Next.js tiene que ser un componente de cliente
    banner: {js: '"use client";'},
    // el css se copia a dist tal cual y el js lo sigue importando, asi el proyecto que lo usa
    // no tiene que importar los estilos aparte
    loader: {'.css': 'copy'},
    esbuildOptions(opciones) {
        opciones.assetNames = '[name]';
    },
});
