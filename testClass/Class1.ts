
/// <refence path = '../decorator/decorator.ts'>
/// <refence path = 'decorator.ts'>
import { propertyDecorator } from '../decorator/decorator'
// const { testDecorator } = MyFrame;

export class Class1 {

    @propertyDecorator()
    private _cName: string = '';

    constructor() {
        console.log("this is Class1 ", this._cName);
    }
}