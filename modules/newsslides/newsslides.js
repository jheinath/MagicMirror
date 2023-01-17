/* MagicMirror²
 * Module: NewsSlides
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("newsslides", {
	defaults: {
		width: "100%",
		height: "inherit",
		refresh_interval_sec: 0,
		content: "There is nothing to display. <br>Put your HTML code into content field in 'config.js'.",
		file: "",
	},

	start: function() {
		this.timer = null
	},

	notificationReceived: function(noti, payload, sender) {
		if (noti == "DOM_OBJECTS_CREATED") {
			this.refresh()
		}
	},

	refresh: function() {
		this.updateDom()
		if (this.config.refresh_interval_sec > 0) {
			var self = this
			this.timer = setTimeout(function(){
				self.refresh()
			}, this.config.refresh_interval_sec * 1000)
		}
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.innerHTML = this.config.content
		wrapper.className = "HTMLBX"
		wrapper.style.width = this.config.width
		wrapper.style.height = this.config.height
		return wrapper
	},
});


