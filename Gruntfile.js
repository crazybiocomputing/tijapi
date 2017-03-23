module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src:  'javascripts/<%= pkg.name %>.js',
            dest: 'javascripts/<%= pkg.name %>.min.js'
        }
    },
    concat: {
        dist: {
            src: ['src/**/*.js'],
            dest: 'javascripts/<%= pkg.name %>.js'
        }
    },
    traceur: {
        options: {
            // traceur options here 
            experimental: true,
            // module naming options, 
            moduleNaming: {
            stripPrefix: "javascripts/tijapi.js",
            addPrefix: "edu/crazybiocomputing/tijapi"
            },
            copyRuntime: 'javascripts/'
        },
        custom: {
            files: [{
                expand: true,
                cwd: 'javascripts/',
                src: ['*.js'],
                dest: 'javascripts/es5'
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
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-traceur');
  
  // Default and other tasks.
  grunt.registerTask('default',['concat','traceur','uglify']);

};

