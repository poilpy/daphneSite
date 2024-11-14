// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    swup({
    // @ts-ignore
    theme: 'fade'
    

    }), 
    alpinejs(),
  ]
});