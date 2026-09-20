module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data",
        },
    };
};
