var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    var paraString = a.replace(/^0+/, "");
    return paraString;
};
console.log(cutZero('000000123'));
var removeDash = function (a) {
    var inDataParse = a.replace(/-/g, '');
    return parseFloat(inDataParse);
};
console.log(removeDash('1321-7777'));
function 함수1(a) {
    a();
}
function 함수2() {
}
함수1(함수2);
