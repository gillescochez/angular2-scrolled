exports.config = {

    useAllAngular2AppRoots: true,

    allScriptsTimeout: 11000,

    specs: [
        "e2e/*.js",
        "e2e/*/*.js"
    ],

    capabilities: {
        browserName: "chrome"
    },

    baseUrl: "http://localhost:8000/",

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};