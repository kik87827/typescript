// 객체지향언어같은 문법도 제공 public private protected static
class User03 {
    name :string;
    private familyName :string = 'kim'
    constructor(a){
        this.name = a + this.familyName;
    }
    public modifyName(){
        this.familyName = 'park';
    }
}

let userIns03 = new User03('민수');
console.log(userIns03);

userIns03.modifyName();
console.log(userIns03);

class User04 {
    constructor(public name :string){
    }
}

let user04Ins = new User04('kim');
console.log(user04Ins);

class User05 {
    protected x = 10;
    private y = 10;
}

class User05New extends User05{
    doThis(){
        this.x = 20;
    }
}

let user05 = new User05New();

console.log(user05);


class User06{
    private static x = 10;
    y = 20;
}

let insUser06 = new User06();
console.log();


class User07 {
    static skill = 'js';
    intro = User07.skill + ' 전문가입니다.'
}

let user07ins = new User07();
console.log(user07ins);



User07.skill = 'ts';

let user07ins02 = new User07();
console.log(user07ins02);