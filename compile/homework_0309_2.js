let cutZero2 = (a) => {
    const paraString = a.replace(/^0+/, "");
    return paraString;
};
let removeDash2 = (a) => {
    const inDataParse = a.replace(/-/g, '');
    return parseFloat(inDataParse);
};
function multiFunc(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
multiFunc('010-1111-2222', cutZero2, removeDash2);
