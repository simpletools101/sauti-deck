import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact.html"),
        blog: resolve(__dirname, "blog.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        "404": resolve(__dirname, "404.html"),
        "blog-view": resolve(__dirname, "blog-view.html"),
        privacy: resolve(__dirname, "privacy.html"),
        service: resolve(__dirname, "service.html"),
        servicea: resolve(__dirname, "servicea.html"),
        serviceb: resolve(__dirname, "serviceb.html"),
        servicec: resolve(__dirname, "servicec.html"),
        serviced: resolve(__dirname, "serviced.html"),
        services: resolve(__dirname, "services.html"),
        team: resolve(__dirname, "team.html"),

        // Projects
        "project-1": resolve(__dirname, "project-1.html"),
        "project-2": resolve(__dirname, "project-2.html"),
        "project-3": resolve(__dirname, "project-3.html"),
        "project-4": resolve(__dirname, "project-4.html"),
        "project-5": resolve(__dirname, "project-5.html"),
        "project-6": resolve(__dirname, "project-6.html"),
      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        { src: "js/*", dest: "js" },
        { src: "img/*", dest: "img" },
        { src: "api/*", dest: "api" },
        { src: "css/*", dest: "css" },
        { src: "scss/*", dest: "scss" },
      ],
    }),
  ],
});
