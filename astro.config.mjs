// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Nunito",
    cssVariable: "--font-quicksand",
         weights: [400,500, 600,700],
  },{
    provider: fontProviders.fontsource(),
    name: "Fredoka",
    cssVariable: "--font-fredoka",
         weights: [400,700],
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});