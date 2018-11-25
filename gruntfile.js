// 'use strict()';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watch task
        watch: {
            files: ['src//**/*.hbs','src/sass/**/*.scss'],
            tasks: ['assemble','sass','autoprefixer']
        },

        // assemble task
        assemble: {
            options: {
                layout: 'layout.hbs',
                layoutdir: 'src/layouts/',
                partials: 'src/partials/**/*.hbs',
                flatten: true
            },
            pages: {
                src: 'src/layouts/*.hbs',
                dest: './prod'
            }
        },

        // sass task
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto',
                },
                files: {
                    'dist/style.css': 'src/sass/style.scss',
                }
            },
        },

        // autoprefixer task
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            // prefix all files
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'dist/*.css',
                dest: 'prod'
            }
        },

        // serve task
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "dist/*"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./dist"
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'watch']);
};
