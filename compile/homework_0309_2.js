var cutZero2 = function (a) {
    var paraString = a.replace(/^0+/, "");
    return paraString;
};
var removeDash2 = function (a) {
    var inDataParse = a.replace(/-/g, '');
    return parseFloat(inDataParse);
};
function multiFunc(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
multiFunc('010-1111-2222', cutZero2, removeDash2);
