"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <refence path = '../decorator/decorator.ts'>
/// <refence path = 'decorator.ts'>
var decorator_1 = require("../decorator/decorator");
// const { testDecorator } = MyFrame;
var Class1 = /** @class */ (function () {
    function Class1() {
        this._cName = '';
        console.log("this is Class1 ", this._cName);
    }
    __decorate([
        decorator_1.propertyDecorator()
    ], Class1.prototype, "_cName", void 0);
    return Class1;
}());
exports.Class1 = Class1;
//# sourceMappingURL=Class1.js.map