import { Component } from "@angular/core";
import { DomSanitizationService } from "@angular/platform-browser";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { ScrolledDirective } from "../angular2-scrolled";

@Component({
    selector: "my-app",
    templateUrl: "demo.html",
    directives: [ScrolledDirective]
})

export class AppComponent {

    enabled: Boolean = true;
    items: Array = [];
    hItems: Array = [];
    windowItems: Array = [];
    hWidth: String;
    trustStyle: Function;

    constructor(sanitizer: DomSanitizationService) {
        this.trustStyle = sanitizer.bypassSecurityTrustStyle;
        this.more();
        this.hMore();
        this.windowMore();
    }

    more() {
        (new Array(20)).fill(0).forEach(() => {
            this.items.push({
                name: this.items.length + 1
            });
        });
    }

    hMore() {
        (new Array(20)).fill(0).forEach(() => {
            this.hItems.push({
                name: this.hItems.length + 1
            });
        });
        this.hWidth = this.trustStyle((50 * this.hItems.length) + "px");
    }

    windowMore() {
        (new Array(20)).fill(0).forEach(() => {
            this.windowItems.push({
                name: this.windowItems.length + 1
            });
        });
    }
}

bootstrap(AppComponent);
