module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require("eleventy-plugin-heroicons"), {
    className: "heroIcon",
    errorOnMissing: false
  });

  eleventyConfig.addPassthroughCopy("src/css")
  eleventyConfig.addPassthroughCopy("src/img")
  eleventyConfig.addPassthroughCopy("src/.htaccess")
  eleventyConfig.addPassthroughCopy("src/favicon.ico")


  return {
    templateFormats: [
      "html",
      "liquid",
      "md"
    ],
    dir: {
			input: "src"
		},
  }
};