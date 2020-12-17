"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var tt = [5, 2, 7, 3, 1];
    tt.sort(function (a, b) {
        return b - a;
    });
    console.log("tt: ", tt);
    var one = 1;
    var three = 3;
    console.log((1 / 3).toFixed(2));
}
main();
require('./testClass/TestRequire');
function testSlice() {
    var aList = [];
    for (var index = 0; index < 5; index++) {
        var a = {
            name: 'a_' + index,
            age: 10 * index
        };
        aList.push(a);
    }
    var b = aList.slice(0);
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
function sleep(second, param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (param > 1000) {
                resolve(param);
            }
            else {
                reject(param);
            }
        }, second);
    });
}
function testAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("testAsync1111", new Date().getTime());
                    return [4 /*yield*/, sleep(1000).then(function (param) {
                            // resolve
                            console.log('promise then resolve');
                        }, function (param) {
                            // reject
                            console.log("promise then reject " + param);
                        })];
                case 1:
                    ret = _a.sent();
                    console.log('testAsync2222', ret);
                    return [2 /*return*/, 'async'];
            }
        });
    });
}
function test1() {
    console.log("test1", new Date().getTime());
}
// function test2() {
//     await test1();
// }
function testMain() {
    console.log(testAsync());
    // console.log(test1());
}
// testMain();
//#endregion
function testHanzi() {
    var name = '';
    var nameLen = 3;
    for (var index = 0; index < nameLen; index++) {
        // eval("var word=" + '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
        var str_1 = '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16);
        // console.log("str: ", str);
        // let strs = str.split("\\u");
        // var str2 = '';
        // for (var i = 0; i < strs.length; i++) {
        //     str2 += String.fromCharCode(Number(parseInt(strs[i], 16).toString(10)));
        //     console.log("str2: ", str2, i);
        // }
        var str2 = unescape(str_1.replace(/\\u/gi, '%u'));
        name += str2;
    }
    name.trim();
    console.log('name', name);
}
testHanzi();
function test2ArrDiff() {
    var arr1 = [1, 2, 3]; //[0, 1, 2, 3, 4, 5];
    var arr2 = [1, 2, 3, 4]; //[0, 4, 6, 1, 3, 9];
    var ret = [];
    arr1.concat(arr2).forEach(function (e) {
        console.log("e: " + e + ' ' + arr1.indexOf(e) + '  ' + arr2.indexOf(e));
        if (arr2.indexOf(e) !== -1 && arr1.indexOf(e) === -1) {
            ret.push(e);
        }
    });
    console.log('ret: ' + JSON.stringify(ret));
    function getArrDifference(arr1, arr2) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    }
    console.log(getArrDifference(arr1, arr2));
}
test2ArrDiff();
var sys;
(function (sys) {
    sys[sys["HUAWEI_GAME"] = 1] = "HUAWEI_GAME";
    sys[sys["OPPO_GAME"] = 2] = "OPPO_GAME";
    sys[sys["XIAOMI_GAME"] = 3] = "XIAOMI_GAME";
})(sys || (sys = {}));
function testObject() {
    var _a;
    /** 快游戏远程地址 */
    var QGRemoteUrl = (_a = {},
        _a[sys.HUAWEI_GAME] = "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
        _a[sys.OPPO_GAME] = "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
        _a[sys.XIAOMI_GAME] = "https://lyltd-test.ssl.daxianghuyu.cn/huaiwei-quick",
        _a);
    console.log('urls: ', JSON.stringify(QGRemoteUrl));
    console.log('url: ', QGRemoteUrl[sys.HUAWEI_GAME]);
}
testObject();
function testPromise() {
    var p = function () {
        var num = Math.random();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                num > 0.5 ? resolve(num) : reject(num);
            }, 1000);
        });
    };
    p().then(function (val) {
        console.info("Status switches to fulfilled, and the value is " + val);
    }, function (val) {
        console.info("Status switches to reject, and the value is " + val);
    });
}
testPromise();
// testPromise().then(() => {
//     console.log('====> then');
// });
function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80)
            r.push(c);
        else if (c < 0x800)
            r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else
                r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        }
    ;
    return r;
}
// 字符串加密成 hex 字符串
function sha1(s) {
    var data = new Uint8Array(encodeUTF8(s));
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)
        s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
        function () { return m[1] & m[2] | ~m[1] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; },
        function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; }
    ], rol = function (n, c) { return n << c | n >>> (32 - c); }, k = [1518500249, 1859775393, -1894007588, -899497514], m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)
            m[j] = m[j] + o[j] | 0;
    }
    ;
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)
        m[i] = t.getUint32(i << 2);
    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}
var data = {
    "nickName": "Band",
    "gender": 1,
    "language": "zh_CN",
    "city": "Guangzhou",
    "province": "Guangdong",
    "country": "CN",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/1vZvI39NWFQ9XM4LtQpFrQJ1xlgZxx3w7bQxKARol6503Iuswjjn6nIGBiaycAjAtpujxyzYsrztuuICqIM5ibXQ/0"
};
var str = JSON.stringify(data) + 'HyVFkGl5F5OQWJZZaNzBBg==';
console.log('===> sha: ', sha1(str));
//# sourceMappingURL=Test.js.map