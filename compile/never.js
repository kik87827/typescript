function neverFunc() {
    while (true) {
    }
}
function neverFunc01(para) {
    if (typeof para === "string") {
        console.log(para);
    }
    else {
        console.log(para);
    }
}
var neverFunc02 = function () {
    throw new Error();
};
