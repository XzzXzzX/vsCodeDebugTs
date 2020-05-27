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

    let tt = [5, 2, 7, 3, 1];
    tt.sort((a, b) => {
        return b - a;
    });
    console.log("tt: ", tt);

    let one = 1;
    let three = 3;
    console.log((1 / 3).toFixed(2));
}
main();
require('./testClass/TestRequire');

function testSlice() {

    let aList = [];
    for (let index = 0; index < 5; index++) {
        let a = {
            name: 'a_' + index,
            age: 10 * index
        }
        aList.push(a);
    }
    let b = aList.slice(0);
    b[0].name = "b_0";
    console.log("a: ", aList);
    console.log("b: ", b);
    console.log("end testSlice");
}
// testSlice();

//#region async- await promise
/**
 * 实现异步代码
 * await 必须使用在async修饰的函数内
 * 后面可以跟任何js表达式。
 * 
 */


/**
 * 使用 setTimeout 来模拟异步请求
 * @param second 
 * @param param 
 */
function sleep(second: number, param?: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, second);
    })
}

async function testAsync() {
    console.log("testAsync1111", new Date().getTime());
    let ret = await sleep(1000);
    console.log('testAsync2222', ret);
    return 'async';
}

function test1() {
    console.log("test1", new Date().getTime());
}

// function test2() {
//     await test1();
// }

function testMain(): void {

    console.log(testAsync());
    // console.log(test1());
}

// testMain();

//#endregion

function testHanzi() {

    let name: string = '';
    let nameLen: number = 3;
    for (let index = 0; index < nameLen; index++) {
        // eval("var word=" + '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
        let str = '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16);
        // console.log("str: ", str);
        // let strs = str.split("\\u");
        // var str2 = '';
        // for (var i = 0; i < strs.length; i++) {
        //     str2 += String.fromCharCode(Number(parseInt(strs[i], 16).toString(10)));
        //     console.log("str2: ", str2, i);
        // }
        let str2 = unescape(str.replace(/\\u/gi, '%u'));
        name += str2;
    }
    name.trim();
    console.log('name', name);
}

testHanzi();

function test2ArrDiff() {
    var arr1 = [1, 2, 3];//[0, 1, 2, 3, 4, 5];
    var arr2 = [1, 2, 3, 4];//[0, 4, 6, 1, 3, 9];
    let ret: any[] = [];
    arr1.concat(arr2).forEach(e => {
        console.log("e: " + e + ' ' + arr1.indexOf(e) + '  ' + arr2.indexOf(e));
        if (arr2.indexOf(e) !== -1 && arr1.indexOf(e) === -1) {
            ret.push(e);
        }
    });
    console.log('ret: ' + JSON.stringify(ret));

    function getArrDifference(arr1: any[], arr2: number[]) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    }
    console.log(getArrDifference(arr1, arr2));
}
test2ArrDiff();

enum sys {
    HUAWEI_GAME = 1,
    OPPO_GAME = 2,
    XIAOMI_GAME = 3,
}

function testObject() {

    /** 快游戏远程地址 */
    var QGRemoteUrl = {
        [sys.HUAWEI_GAME]: "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
        [sys.OPPO_GAME]: "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
        [sys.XIAOMI_GAME]: "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
    }

    console.log('urls: ', JSON.stringify(QGRemoteUrl));
    console.log('url: ', QGRemoteUrl[sys.HUAWEI_GAME]);
}
testObject();