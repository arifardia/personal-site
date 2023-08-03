const imagePlugin = require('@11ty/eleventy-img');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');

	// collections
	eleventyConfig.addCollection('projects', (collection) => {
		return collection.getFilteredByGlob('src/projects/*.md');
	});

	// get year shortcode
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	// eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

	eleventyConfig.setServerOptions({
		showAllHosts: true,
})

	return {
		dir: {
			input: 'src',
			layouts: '_layouts',
		},
	};
};