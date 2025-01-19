let menname2 :string = 'kim';
menname2 = `kim2`;

let arrayobj :string[] = ['kim', 'park']; // string만 있는 array
let objData :{name : string} = { name : 'kim'};
let objData2 :{name? : string} = {}; // name 없을수도 있음

let samName : string | number = 'kim';
samName = 123;


type Mytype = string | number;
let testName :Mytype = 1234;

function MyFunc(x :number) :number {
   return x * 2; 
}

MyFunc(1);


type Member = [number, boolean]; // tuple 타입 - 무조건 첫째는 number, 둘째는 boolean;
let john:Member = [123,true];

type ObjMember = {
    [key :string] : string,
}
let tom :ObjMember = {name : 'kim', age : '123'}


class User {
    name :string; 
    constructor(name :string){
        this.name = name;
    }
}


