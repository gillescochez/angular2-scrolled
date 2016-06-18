# Angular 2 scrolled

Angular2-scrolled in an infinite scrolling directive for angular 2 which trigger an event when the user scroll to the end.
It supports both vertical and horizontal scrolling.

*Doesn't require jQuery.*

## Usage

Compare to angular-scrolled the function to be executed need to be bound to the event `onScrolled` like so ```(onScrolled)="more()"```

```javascript

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

```

```html

<p>In a element (no threshold) <input type="checkbox" [(ngModel)]="enabled" /> Enabled</p>
<div id="wrap" scrolled (onScrolled)="more()" [scrolledEnabled]="enabled">
    <div *ngFor="let item of items" class="item">
        {{item.name}}
    </div>
</div>

```

## Options

### scrolledDirection (default: vertical)

Set the direction of the scrolling. Can be changed dynamically.

### scrolledThreshold (default: 0)

How far from the end of the scrolling area should the function be triggered. Can be changed dynamically.

### scrolledEnabled (default: true)

Should the function be triggered or not. Can be changed dynamically.

### scrolledWindow (default: false)

Should the handler be attached to the window element. This is to allow the directive to be attached anywhere and still
listen to the window scroll event instead of the element it is attached to.

## Running the demo

To run the demo simply run ```npm start``` and visit [http://localhost:8000](http://localhost:8000)

## Running the tests

To run the tests have the demo up and running and then run the ```npm run protractor``` command.

## TODO

* More tests