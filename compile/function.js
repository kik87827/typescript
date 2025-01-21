function funcObj(x) {
    return x * 2;
}
funcObj(10);
function funcObj2(x) { }
funcObj2();
function funcObj3(x) {
    if (typeof x !== "string") {
        console.log(x + 3);
    }
}
