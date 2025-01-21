function workFunc1(name) {
    if (typeof name === "string") {
        return "\uC548\uB155\uD558\uC138\uC694 ".concat(name);
    }
    else {
        return "\uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";
    }
}
function workFunc1Apple(name) {
    if (name) {
        console.log("안녕하세요" + name);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function workFunc2(para) {
    return para.toString().length;
}
function merry(income, home, charm) {
    var sum = 0;
    sum += income > 0 && income / 100;
    sum += home && 500;
    sum += charm === "상" && 100;
    if (sum >= 600) {
        return "결혼가능";
    }
    else {
        return "결혼불가";
    }
}
console.log(merry(550, true, "상"));
console.log(merry(50, false, "상"));
