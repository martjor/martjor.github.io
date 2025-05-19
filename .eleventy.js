module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("photos");



    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      markdownTemplateEngine: "liquid"
    };
  };
  