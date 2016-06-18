describe("angular2-scrolled", () => {

    beforeEach(() => {
        browser.get("/");
    });

    describe("binding to element", () => {

        it("should load more items when the element is scrolled to the bottom", () => {

            let count = 0;

            element.all(by.css("#wrap > .item")).then((items) => {
                count = items.length;
            });

            browser.executeScript("document.getElementById('wrap').scrollTop = 1000;").then(() => {
                element.all(by.css("#wrap > .item")).then((items) => {
                    expect(items.length).toEqual(count * 2);
                });
            });
        });

        it("should NOT load more item if scrolled-enabled is false", () => {

            let count = 0;

            element.all(by.css("#wrap > .item")).then((items) => {
                count = items.length;
            });

            element(by.css("[type=checkbox]")).click();

            browser.executeScript("document.getElementById('wrap').scrollTop = 1000;").then(() => {
                element.all(by.css("#wrap > .item")).then((items) => {
                    expect(items.length).toEqual(count);
                });
            });
        });
    });

    describe("binding to window", () => {

        it("should load more items when the window is scrolled to the bottom", () => {

            let count = 0;

            element.all(by.css("#doc > .item")).then((items) => {
                count = items.length;
            });

            browser.executeScript("window.scrollTo(0, 10000);").then(() => {
                element.all(by.css("#doc > .item")).then((items) => {
                    expect(items.length).toEqual(count * 2);
                });
            });
        });
    });

    describe("horizontal scrolling", () => {

        it("should load more items when the element is scrolled to the right", () => {

            let count = 0;

            element.all(by.css("#wrap-horizontal > .item")).then((items) => {
                count = items.length;
            });

            browser.executeScript("document.getElementById('wrap-horizontal').scrollTop = 1000;").then(() => {
                element.all(by.css("#wrap-horizontal > .item")).then((items) => {
                    expect(items.length).toEqual(count * 2);
                });
            });
        });
    });

});