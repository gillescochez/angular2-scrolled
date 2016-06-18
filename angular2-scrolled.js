import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[scrolled]'
})

export class ScrolledDirective {

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        console.log(this.el);
    }

    @Input() set scrolledDirection(direction) {
        console.log("direction", direction);
    }

    @Input() set scrolledThreshold(threshold) {
        console.log("threshold", threshold);
    }

    @Input() set scrolledEnabled(enabled) {
        console.log("enabled", enabled);
    }

    @Input() set scrolledWindow(window) {
        console.log("window", window);
    }

}