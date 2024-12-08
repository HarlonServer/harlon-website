module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('HHL')
    eleventyConfig.addPassthroughCopy('guides')
    eleventyConfig.addPassthroughCopy('favicon.ico')
    eleventyConfig.addPassthroughCopy('favicon.png')
    eleventyConfig.addPassthroughCopy('robots.txt')
    eleventyConfig.addPassthroughCopy('humans.txt')
    eleventyConfig.addPassthroughCopy('3rd-party-licenses.txt')
  }