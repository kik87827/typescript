var TypeUser = (function () {
    function TypeUser(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    TypeUser.prototype.nameModify = function () {
        this.familyName = 'park';
    };
    return TypeUser;
}());
var tu01 = new TypeUser('민수');
tu01.nameModify();
console.log(tu01);
console.log(tu01.name);
