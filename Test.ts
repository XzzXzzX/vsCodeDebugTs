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
            if (param > 1000) {
                resolve(param);
            } else {
                reject(param);
            }
        }, second);
    })
}

async function testAsync() {
    console.log("testAsync1111", new Date().getTime());
    let ret = await sleep(1000).then((param) => {
        // resolve
        console.log('promise then resolve');
    }, (param) => {
        // reject
        console.log(`promise then reject ${param}`);

    });
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

function testPromise(): any {
    const p = function () {
        let num = Math.random();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                num > 0.5 ? resolve(num) : reject(num);
            }, 1000);
        })
    };


    p().then(val => {
        console.info(`Status switches to fulfilled, and the value is ${val}`);
    }, val => {
        console.info(`Status switches to reject, and the value is ${val}`);
    })
}
testPromise();
// testPromise().then(() => {
//     console.log('====> then');
// });



function encodeUTF8(s: any) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
    return r;
}

// 字符串加密成 hex 字符串
function sha1(s: any) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s: any = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w: any = [], f: any = [
        function () { return m[1] & m[2] | ~m[1] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; },
        function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; }
    ], rol = function (n, c) { return n << c | n >>> (32 - c); },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
    };
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}

let data = {
    "nickName": "Band",
    "gender": 1,
    "language": "zh_CN",
    "city": "Guangzhou",
    "province": "Guangdong",
    "country": "CN",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/1vZvI39NWFQ9XM4LtQpFrQJ1xlgZxx3w7bQxKARol6503Iuswjjn6nIGBiaycAjAtpujxyzYsrztuuICqIM5ibXQ/0"
};
let str = JSON.stringify(data) + 'HyVFkGl5F5OQWJZZaNzBBg==';
// console.log('===> sha: ', sha1(str));

for (let i = 0, l = 3; i < l; i++) {
    for (let j = 0, ll = 3; j < ll; j++) {
        console.log('====> j: ', j);
        if (j == 1) break;
    }
    console.log('----> i: ', i);
}

