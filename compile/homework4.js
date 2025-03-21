const data = [1, 2, "3", "4", 5];
function fileterData(para) {
    let filterArray = [];
    para.forEach((item) => {
        if (typeof item === "string") {
            filterArray.push(parseFloat(item));
        }
        else {
            filterArray.push(item);
        }
    });
    return filterArray;
}
console.log(fileterData(data));
let objA = { subject: "math" };
let objB = { subject: ["science", "english"] };
let objC = { subject: ["science", "art", "korean"] };
function filterObj(obj) {
    if (typeof obj.subject === "string") {
        return obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return "없음";
    }
}
console.log(filterObj(objA));
console.log(filterObj(objB));
console.log(filterObj(objC));
