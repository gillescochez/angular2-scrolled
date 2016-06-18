import { Component } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { ScrolledDirective } from "../angular2-scrolled";

@Component({
    selector: "my-app",
    templateUrl: "demo.html",
    directives: [ScrolledDirective]
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
