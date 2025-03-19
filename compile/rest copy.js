var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function restFunc01() {
    var para = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        para[_i] = arguments[_i];
    }
    console.log(para);
}
restFunc01(1, 4, 5, 6, 7, 8);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
var _a = ['안녕', 100], var1 = _a[0], var2 = _a[1];
function menFunc(_a) {
    var MenStudent = _a.MenStudent, MenAge = _a.MenAge;
    console.log(MenStudent, MenAge);
}
menFunc({ MenStudent: false, MenAge: 40 });
