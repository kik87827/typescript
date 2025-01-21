var data = [1, 2, "3", "4", 5];
function fileterData(para) {
    var filterArray = [];
    para.forEach(function (item) {
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
var objA = { subject: "math" };
var objB = { subject: ["science", "english"] };
var objC = { subject: ["science", "art", "korean"] };
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
