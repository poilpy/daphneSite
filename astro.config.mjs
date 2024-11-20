// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://daphnestyles.com',
  integrations: [tailwind(), swup({
  // @ts-ignore
    theme: 'fade'
    

    }), alpinejs(), sitemap()]


});