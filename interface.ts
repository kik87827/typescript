interface Square { color: String; width : Number}

let nemo: Square = { color: "red", width: 100 };


interface stuInter {
  name: string;
}


interface stuInter {
  score?: string;
}

interface teaInter extends stuInter {
  age: number;
}


let stu: stuInter = { name: "kim" };
let tea: teaInter = { name: "kim", age: 20, };


type Animal = { name: string }
type Cat = { age: number } & Animal;




