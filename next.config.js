const withPlugins = require("next-compose-plugins");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withMDX());