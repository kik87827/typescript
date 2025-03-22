function restFunc01(...para) {
    console.log(para);
}
restFunc01(1, 4, 5, 6, 7, 8);
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
let [var1, var2] = ['안녕', 100];
function menFunc({ MenStudent, MenAge }) {
    console.log(MenStudent, MenAge);
}
menFunc({ MenStudent: false, MenAge: 40 });
