module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: [
          'Gruntfile.js',
          'tests/tests.js',
          'extension/extension.js',
          'extension.prefs.js',
          'extension/convenience.js',
          'extension/stuff.js'
      ],
      options: {
        esversion: 6,
      },
    },

    babel: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        dist: {
          files: {
            "tests/babel/extension.js": "extension/extension.js",
            "tests/babel/prefs.js": "extension/prefs.js",
            "tests/babel/convenience.js": "extension/convenience.js",
            "tests/babel/stuff.js": "extension/stuff.js"
          }
        }
    },

    qunit: {
      options: {
        '--web-security': 'no',
        coverage: {
          disposeCollector: true,
          src: [
              //'tests/babel/extension.js',
              //'tests/babel/prefs.js',
              //'tests/babel/convenience.js',
              'tests/babel/stuff.js'
          ],
          instrumentedFiles: 'temp/',
          htmlReport: 'coverage/html-coverage',
          lcovReport: 'coverage/',
        }
      },
      all: ['tests/tests.html']
    },

  });

  grunt.registerTask('default', ['babel', 'qunit']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-babel');

};
