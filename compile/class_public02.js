var PersonType = (function () {
    function PersonType(name) {
        this.name = name;
    }
    return PersonType;
}());
var childInstance = new PersonType('kim');
console.log(childInstance);
