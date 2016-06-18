import { Directive, ElementRef, HostListener, Input, Output, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";

@Directive({
    selector: '[scrolled]'
})

export class ScrolledDirective {

    direction: String = "vertical";
    threshold: Number = 0;
    enabled: Boolean = true;

    container: Object;
    subscription: Subscription;
    element: HTMLElement;
    canTrigger: Function;

    @Input("scrolledWindow") useWindow: Boolean = false;

    @Output() onScrolled = new EventEmitter();

    constructor(el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {

        this.container = this.useWindow ? window : this.element;
        this.canTrigger = this.useWindow ? function() {

            var doc = document.documentElement;

            if (this.direction === "vertical") {
                return this.enabled && ((doc.offsetHeight - window.innerHeight) - (window.pageYOffset - (doc.clientTop || 0)) <= this.threshold);
            } else {
                return this.enabled && ((doc.offsetWidth - window.innerWidth) - (window.pageXOffset - (doc.clientLeft || 0)) <= this.threshold);
            }

        } : function() {

            var raw = this.element;

            if (this.direction === "vertical") {
                return this.enabled && (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - this.threshold);
            } else {
                return this.enabled && (raw.scrollLeft + raw.offsetWidth >= raw.scrollWidth - this.threshold);
            }
        };

        this.subscribe();
    }

    subscribe() {
        this.subscription = Observable.fromEvent(this.container, "scroll").subscribe(this.handler.bind(this));
    }

    handler() {
        if (this.canTrigger()) {
            this.onScrolled.next({});
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    @Input() set scrolledDirection(value: String) {
        this.direction = value;
    }

    @Input() set scrolledThreshold(value: Number) {
        this.threshold = value;
    }

    @Input() set scrolledEnabled(value: Boolean) {
        this.enabled = value;
    }
}