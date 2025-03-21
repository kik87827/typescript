function workFunc1(name) {
    if (typeof name === "string") {
        return `안녕하세요 ${name}`;
    }
    else {
        return `이름이 없습니다.`;
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
    let sum = 0;
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
