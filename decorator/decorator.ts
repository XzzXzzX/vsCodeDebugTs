// namespace MyFrame {


export function classDecorator(params: any) {

}

/** 
 * 属性装饰器
 * 
 */
export function propertyDecorator(param: string = ''): any {
    console.log('===> testDecorator:', param);
    // return function (target: any, property: string) {
    //     console.log('===> target:', target);
    //     console.log('===> property:', property);
    //     return '';
    // };
    // return param;
}
// }