module.exports = function(grunt) {
	grunt.initConfig({
		critical: {
	    dist: {
	      options: {
					inline: false,
					minify: true,
					extract: true,
	        base: './_site',
					pathPrefix: './_site',
					dimensions: [{
						width: 1300,
						height: 900
					},
					{
						width: 500,
						height: 900
					}]
	      },
	      // The source file
	      src: './_site/index.html',
	      // The destination file
	      dest: './_includes/critical.css'
	      }
	    }
	  });

	  // Load the plugins
	  grunt.loadNpmTasks('grunt-critical');

	  // Default tasks.
	  grunt.registerTask('default', ['critical']);
};
