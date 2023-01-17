/* MagicMirror²
 * Module: NewsSlides
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("newsslides", {
	// Default module config.
	defaults: {
		text: "Hallo Lena!"
	},

	getTemplate: function () {
		return "newsslides.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});


