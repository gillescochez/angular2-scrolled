module.exports = function(grunt) {

    var tasks = ["babel", "browserify", "uglify", "clean"];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                presets: ["es2015", "angular2"],
                plugins: ["babel-plugin-transform-es2015-modules-umd"]
            }
        },
        browserify: {
            demo: {
                files: {
                    "demo/bundle.src.js": [
                        "node_modules/core-js/client/shim.js",
                        "node_modules/zone.js/dist/zone.js",
                        "node_modules/reflect-metadata/Reflect.js",
                        "node_modules/@angular/*/bundles/*.umd.js"
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
        clean: ["demo/demo.src.js"]
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-babel");

    grunt.registerTask("default", tasks);
};
