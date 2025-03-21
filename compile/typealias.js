let myFunc2345 = function (a) {
    return 10;
};
let memberData = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { }
};
let mdplusOne = memberData.plusOne(5);
