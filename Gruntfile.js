module.exports = function(grunt) {

    var tasks = ["browserify"];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        browserify: {
            vendor: {
                files: {
                    "demo/vendor.min.js": [
                        "node_modules/rxjs/bundles/Rx.umd.js",
                        "node_modules/core-js/client/shim.js",
                        "node_modules/zone.js/dist/zone.js",
                        "node_modules/reflect-metadata/Reflect.js",
                        "node_modules/@angular/*/bundles/*.umd.js"
                    ]
                },
                options: {
                    transform: ["uglifyify"]
                }
            },
            demo: {
                files: {
                    "demo/demo.min.js": [
                        "demo/demo.js"
                    ]
                },
                options: {
                    transform: [["babelify", {
                        presets: ["es2015", "angular2"],
                        plugins: ["babel-plugin-transform-es2015-modules-umd"]
                    }], "uglifyify"]
                }
            }
        },
        watch: {
            demo: {
                files: ["demo/demo.js"],
                tasks: ["browserify:demo"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("default", tasks);
};
