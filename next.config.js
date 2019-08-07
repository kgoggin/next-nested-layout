const withPlugins = require("next-compose-plugins");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withMDX({
    exportPathMap: () => ({
      "/": { page: "/" },
      "/docs/page-1": { page: "/docs/[id]", query: { id: "page-1" } },
      "/docs/page-2": { page: "/docs/[id]", query: { id: "page-2" } },
      "/examples/page-1": { page: "/examples/[id]", query: { id: "page-1" } },
      "/examples/page-2": { page: "/examples/[id]", query: { id: "page-2" } }
    })
  })
);
