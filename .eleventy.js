const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('favicon.ico')
    eleventyConfig.addPassthroughCopy('favicon.png')
    eleventyConfig.addPlugin(UpgradeHelper);
  }