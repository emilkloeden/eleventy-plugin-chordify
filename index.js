const { chordify } = require("@emilkloeden/chordify")

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("chordify", chordify)
}