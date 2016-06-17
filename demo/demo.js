import { Component } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";

@Component({
    selector: "my-app",
    templateUrl: "demo.html"
})

export class AppComponent {

    enabled = true;
    items = [];

    constructor() {
        this.more();
    }

    more() {
        (new Array(20)).fill(0).forEach(() => {
            this.items.push({
                name: this.items.length + 1
            });
        });
    }
}

bootstrap(AppComponent);
