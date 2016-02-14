module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ],
                        dest: "js",
                        filter: "isFile"
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "bower_components/bootstrap/dist/css/bootstrap.min.css",
                            "bower_components/font-awesome/css/font-awesome.min.css"
                        ],
                        dest: "css",
                        filter: "isFile"
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "bower_components/bootstrap/dist/fonts/*",
                            "bower_components/font-awesome/fonts/*"
                        ],
                        dest: "fonts",
                        filter: "isFile"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["copy"]);
};