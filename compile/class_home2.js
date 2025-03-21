class Word {
    num = [];
    str = [];
    constructor(...arg) {
        arg.forEach((item) => {
            if (typeof item === "number") {
                this.num.push(item);
            }
            else if (typeof item === "string") {
                this.str.push(item);
            }
        });
    }
}
let obj = new Word('kim', 'park', 3, 5);
console.log(obj.str, obj.num);
