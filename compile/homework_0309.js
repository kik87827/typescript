let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
let cutZero = (a) => {
    const paraString = a.replace(/^0+/, "");
    return paraString;
};
console.log(cutZero('000000123'));
let removeDash = (a) => {
    const inDataParse = a.replace(/-/g, '');
    return parseFloat(inDataParse);
};
console.log(removeDash('1321-7777'));
function 함수1(a) {
    a();
}
function 함수2() {
}
함수1(함수2);
