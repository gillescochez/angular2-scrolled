(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "@angular/core", "rxjs/Rx"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("@angular/core"), require("rxjs/Rx"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.core, global.Rx);
        global.angular2Scrolled = mod.exports;
    }
})(this, function (exports, _core, _Rx) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ScrolledDirective = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var ScrolledDirective = exports.ScrolledDirective = (_dec = (0, _core.Directive)({
        selector: '[scrolled]'
    }), _dec2 = (0, _core.Input)("scrolledWindow"), _dec3 = (0, _core.Output)(), _dec4 = (0, _core.Input)(), _dec5 = (0, _core.Input)(), _dec6 = (0, _core.Input)(), _dec(_class = (_class2 = function () {
        function ScrolledDirective(el) {
            _classCallCheck(this, ScrolledDirective);

            this.direction = "vertical";
            this.threshold = 0;
            this.enabled = true;
            this.container = this.container;
            this.subscription = this.subscription;
            this.element = this.element;
            this.canTrigger = this.canTrigger;

            _initDefineProp(this, "useWindow", _descriptor, this);

            _initDefineProp(this, "onScrolled", _descriptor2, this);

            this.element = el.nativeElement;
        }

        _createClass(ScrolledDirective, [{
            key: "ngOnInit",
            value: function ngOnInit() {

                this.container = this.useWindow ? window : this.element;
                this.canTrigger = this.useWindow ? function () {

                    var doc = document.documentElement;

                    if (this.direction === "vertical") {
                        return this.enabled && doc.offsetHeight - window.innerHeight - (window.pageYOffset - (doc.clientTop || 0)) <= this.threshold;
                    } else {
                        return this.enabled && doc.offsetWidth - window.innerWidth - (window.pageXOffset - (doc.clientLeft || 0)) <= this.threshold;
                    }
                } : function () {

                    var raw = this.element;

                    if (this.direction === "vertical") {
                        return this.enabled && raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - this.threshold;
                    } else {
                        return this.enabled && raw.scrollLeft + raw.offsetWidth >= raw.scrollWidth - this.threshold;
                    }
                };

                this.subscribe();
            }
        }, {
            key: "subscribe",
            value: function subscribe() {
                this.subscription = _Rx.Observable.fromEvent(this.container, "scroll").subscribe(this.handler.bind(this));
            }
        }, {
            key: "handler",
            value: function handler() {
                if (this.canTrigger()) {
                    this.onScrolled.next({});
                }
            }
        }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            }
        }, {
            key: "scrolledDirection",
            set: function set(value) {
                this.direction = value;
            }
        }, {
            key: "scrolledThreshold",
            set: function set(value) {
                this.threshold = value;
            }
        }, {
            key: "scrolledEnabled",
            set: function set(value) {
                this.enabled = value;
            }
        }]);

        return ScrolledDirective;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useWindow", [_dec2], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onScrolled", [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return new _core.EventEmitter();
        }
    }), _applyDecoratedDescriptor(_class2.prototype, "scrolledDirection", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "scrolledDirection"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scrolledThreshold", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "scrolledThreshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scrolledEnabled", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "scrolledEnabled"), _class2.prototype)), _class2)) || _class);
    Reflect.defineMetadata("design:paramtypes", [_core.ElementRef], ScrolledDirective);
});

},{"@angular/core":undefined,"rxjs/Rx":undefined}]},{},[1]);
