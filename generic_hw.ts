/*  */

function changeFunc<ChangeType extends string | string[]>(para :ChangeType) {
  console.log(para);
}


changeFunc<string>('안녕하삼');
changeFunc<string[]>(['hi', 'hello']);

interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function ObjChange<Type>(para: string): Type {
  const dataParse = JSON.parse(para);
  return dataParse;
}

let objResult = ObjChange<Animal>(data);
console.log(objResult);


class Person<Type>{
  name;
  constructor(a) {
    this.name = a;
  }
}
let ainstance = new Person<string>('어쩌구');
let ainstance2 = new Person<number>('어쩌구');
let ainstance3 = new Person<string[]>('어쩌구');
