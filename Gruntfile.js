/**
 * Created by daniel.irwin on 4/15/16.
 */

module.exports = function GruntFile(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        eslint: {
            options: {
                useEslintrc: true
            },
            target: ['*.js']
        },


        jsdoc2md: {
            oneOutputFile: {
                src: [
                    'src/**/*.js'
                ],
                dest: 'documentation.md'
            }
        },

        jshint: {
            options: {
                jshintrc: true
            },
            all: [
                'Gruntfile.js',
                'src/**/*.js',
                'test/**/*.js'
            ]
        },

        mochaTest : {
            test: {
                src: ['test/**/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['test/**/*.js']
            }
        }
    });


    grunt.registerTask('default', 'Log some stuff.', [
        'jshint',
        'eslint',
        'jsdoc2md',
        'mochaTest'
    ]);
};