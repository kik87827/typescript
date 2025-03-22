function func<MyType>(x: MyType[]) {
  return x[0];
}

let a = func<number>([4, 2]);
let ab = func<string>(['4', '2']);
console.log(a + 1);
console.log(ab);


// MyType이 우측에 있는 속성을 가지고 있는지 체크
function functest<Mytype2 extends number>(x: Mytype2) {
    return x - 1;
}

let abc = functest<number>(100);


interface LengthCheck {
  length : number
}

// MyType이 우측에 있는 속성을 가지고 있는지 체크
function functest2<Mytype3 extends LengthCheck>(x: Mytype3) {
    return x.length;
}

let abcd = functest2<string[]>(['100']);

