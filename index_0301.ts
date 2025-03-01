let namek :string = 'kim';
namek = `123`;

let namearryk :string[] = ['1', '2'];

let nameobjk: { name: string } = { name: 'kim' };

let namek2 :string | number = 123; // union 타입

type Mytype2 = string | number;

let namek3: Mytype2 = 123;

function myFunc(x :number) :number {
    return x * 2;
}

myFunc(123);

type Memberk2 = [number, boolean];

let john2: Memberk2 = [123, true];

type Memberk3 = { name : string }
let jjohn: Memberk3 = { name: 'kim' }

type MemberMulti = { [key :string] : string }

let jjohn2: MemberMulti = { name: 'kim', age: '123' };


class User2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}