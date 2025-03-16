var Word = (function () {
    function Word() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        arg.forEach(function (item) {
            if (typeof item === "number") {
                _this.num.push(item);
            }
            else if (typeof item === "string") {
                _this.str.push(item);
            }
        });
    }
    return Word;
}());
var obj = new Word('kim', 'park', 3, 5);
console.log(obj.str, obj.num);
