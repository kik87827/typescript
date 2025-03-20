// public private protected static
class TypeUser {
    name :string;
    private familyName :string = 'kim';
    constructor(a){
        this.name = a + this.familyName;       
    }

    nameModify(){
        this.familyName = 'park';
    }
}

let tu01 = new TypeUser('민수');
tu01.nameModify();
console.log(tu01);
console.log(tu01.name);