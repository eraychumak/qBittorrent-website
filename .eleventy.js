module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require("eleventy-plugin-heroicons"), {
    className: "heroIcon"
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