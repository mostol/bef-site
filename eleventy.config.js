import yaml from "js-yaml";

export default async function(eleventyConfig) {
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("style.css");

  // Copy `fonts` to `_site/fonts`
  eleventyConfig.addPassthroughCopy("fonts");

  // Copy `img` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Enable passthrough while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  // Add YAML support for data.
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

};

export const config = {
  dir: {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_site"
  }
};