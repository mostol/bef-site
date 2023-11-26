module.exports = function(eleventyConfig) {
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("style.css");

  // Copy `fonts` to `_site/fonts`
  eleventyConfig.addPassthroughCopy("fonts");

  // Copy `img` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Enable passthrough while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  return {
    // When a passthrough file is modified, rebuild the pages:
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};