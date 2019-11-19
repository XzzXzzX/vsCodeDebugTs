"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class1_1 = require("./testClass/Class1");
var Test = /** @class */ (function () {
    function Test() {
        this._name = "";
        this._name = "Test TS";
    }
    return Test;
}());
function main() {
    console.log("hello TS: ", new Test());
    var class1 = new Class1_1.Class1();
}
main();
require('./testClass/TestRequire');
//# sourceMappingURL=Test.js.map