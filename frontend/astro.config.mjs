// @ts-check
import { defineConfig } from 'astro/config';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "es";
const locales = {
  es: "es-ES",
  en: "en-US",
};

import icon from "astro-icon";
import node from "@astrojs/node";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), i18n({
    locales,
    defaultLocale,
    redirectDefaultLocale: true,
  }),
  
  sitemap({
    i18n: {
      locales,
      defaultLocale,
    },
    filter: filterSitemapByDefaultLocale({ defaultLocale }),
  }),],
  site: "https://crodriguez.com.co",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),

});