module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('favicon.ico')
    eleventyConfig.addPassthroughCopy('favicon.png')
  }