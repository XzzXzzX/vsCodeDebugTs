import { Class1 } from "./testClass/Class1";

class Test {
    _name: string = "";
    constructor() {
        this._name = "Test TS";
    }
}

function main() {
    console.log("hello TS: ", new Test());
    let class1: Class1 = new Class1();

}
main();
require('./testClass/TestRequire');