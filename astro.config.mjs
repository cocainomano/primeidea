import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://primeidea.iq-zone.com/",

  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
