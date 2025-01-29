// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import node from "@astrojs/node";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
});