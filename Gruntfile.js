module.exports = function(grunt) {

    var tasks = ["babel", "browserify", "uglify", "clean"];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                presets: ["es2015", "angular2"],
                plugins: ["babel-plugin-transform-es2015-modules-umd"]
            },
            demo: {
                files: {
                    "demo/demo.babel.js": "demo/demo.js"
                }
            }
        },
        browserify: {
            demo: {
                files: {
                    "demo/bundle.src.js": [
                        "node_modules/core-js/client/shim.js",
                        "node_modules/zone.js/dist/zone.js",
                        "node_modules/reflect-metadata/Reflect.js",
                        "node_modules/@angular/*/bundles/*.umd.js",
                        "demo/demo.babel.js"
                    ]
                }
            }
        },
        uglify: {
            demo: {
                src: ["demo/bundle.src.js"],
                dest: "demo/bundle.js"
            }    
        },
        clean: ["demo/bundle.src.js", "demo/demo.babel.js"]
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-babel");

    grunt.registerTask("default", tasks);
};
