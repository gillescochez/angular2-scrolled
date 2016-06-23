module.exports = function(grunt) {

    var tasks = ["browserify"];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        browserify: {
            bundleSrc: {
                files: {
                    "bundles/angular2-scrolled.umd.js": ["angular2-scrolled.js"]
                },
                options: {
                    browserifyOptions: {
                        bundleExternal: false
                    },
                    transform: [["babelify", {
                        presets: ["es2015", "angular2"],
                        plugins: ["babel-plugin-transform-es2015-modules-umd"]
                    }]]
                }
            },
            bundleMin: {
                files: {
                    "bundles/angular2-scrolled.umd.min.js": ["angular2-scrolled.js"]
                },
                options: {
                    browserifyOptions: {
                        bundleExternal: false
                    },
                    transform: [["babelify", {
                        presets: ["es2015", "angular2"],
                        plugins: ["babel-plugin-transform-es2015-modules-umd"]
                    }], "uglifyify"]
                }
            },
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
                        "angular2-scrolled.js",
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
                files: ["angular2-scrolled.js", "demo/demo.js"],
                tasks: ["browserify:demo"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("default", tasks);
    grunt.registerTask("vendor", ["browserify:vendor"]);
    grunt.registerTask("bundles", ["browserify:bundleSrc", "browserify:bundleMin"]);
};
