module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src:  'javascripts/es5/<%= pkg.name %>.js',
        dest: 'javascripts/<%= pkg.name %>_es5.min.js'
      }
    },
    concat: {
      tijapi : {
        src: ['src/**/*.js','nodejs/exports.js'],
        dest: 'javascripts/<%= pkg.name %>.js'
      },
      jim : {
        src:  'jim/src/**/*.js',
        dest: 'javascripts/jim.js'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          data : function(dest, src) {
            // Return an object of data to pass to templates
            return require('./jim/json/menus.json');
          }
        },
        files: {
          './jim.html': './jim/jade/jim.jade'
        }
      }
    },
    traceur: {
      /*
      options: {
      // traceur options here
      experimental: true,
      // module naming options,
      moduleNaming: {
      stripPrefix: "src/js5/tijapi.js",
      addPrefix: "tijapi"
    },
    copyRuntime: 'javascripts/'
  },
  */
  custom: {
    files: [{
      expand: true,
      cwd: 'javascripts/',
      src: ['tijapi.js'],
      dest: 'es5'
    }]
  },
},
jshint: {
  files: ['Gruntfile.js', 'src/**/*.js'],
  options: {
    browser:true,
    strict:false,
    globals: {
      jQuery: false,
      console: true,
      module: true
    }
  }
},
jsdoc : {
  dist : {
    src: ['src/**/*.js'],
    options: {
      configure: 'doc/jsdoc/config.json',
      destination: 'doc/'
    }
  }
}
});
// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-jsdoc');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-traceur');

// Default and other tasks.
grunt.registerTask('default',['concat:tijapi','traceur','uglify']);
grunt.registerTask('jim',['jade','concat:jim']);

};
