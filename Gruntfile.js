module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-jquery-content" );

grunt.initConfig({
	xmllint: {
		all: [
			"entries/**",
			"categories.xml",
			"entries2html.xsl",
			"notes.xsl"
		]
	},
	"build-posts": {
		page: "pages/**"
	},
	"build-xml-entries": {
		all: "entries/**"
	},
	"build-resources": {
		all: "resources/**"
	},
	wordpress: (function() {
		var config = require( "./config" );
		config.dir = "dist/wordpress";
		return config;
	})()
});

grunt.registerTask( "lint", [ "xmllint" ] );

grunt.registerTask( "build", [
	"build-posts",
	"build-resources",
	"build-xml-entries",
	"build-xml-categories",
	"build-xml-full"
]);

};
