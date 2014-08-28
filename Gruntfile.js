module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var projectConfig = {
        banner : '/*!\n'+
            ' *  <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' */',
        js_files : [
            'bower_components/jquery/jquery.min.js',
            'components/js/**/*.js'
        ]
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                banner: projectConfig.banner
            },
            minified: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'www/assets/css/style.min.css': 'components/scss/style.scss'
                }
            },
            normal: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'www/assets/css/style.css': 'components/scss/style.scss'
                }
            }
        },
        jshint: {
            build: ['components/js/site.js']
        },
        concat: {
            options: {
                separator: ';\n\n'
            },
            minified: {
                src: projectConfig.js_files,
                dest: 'www/assets/js/site.min.js'
            },
            normal:  {
                options: {
                    banner: projectConfig.banner
                },
                src: projectConfig.js_files,
                dest: 'www/assets/js/site.js'
            }
        },
        uglify: {
            build: {
                options: {
                    banner: projectConfig.banner
                },
                files: {
                    'www/assets/js/site.min.js': ['www/assets/js/site.min.js']
                }
            }
        },
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['www/index.html']
            }
        },
        watch: {
            html: {
                files: ['www/index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['components/js/site.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['components/scss/**/*.scss'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default',   []);
    grunt.registerTask('build',     ['buildcss', 'buildjs']);
    grunt.registerTask('buildcss',  ['sass']);
    grunt.registerTask('buildjs',   ['jshint', 'concat', 'uglify']);
};
