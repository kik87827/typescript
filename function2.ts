/* function myFunc(x: number | string) {
  if (typeof x !== "string") {
    return x + 1;
  } else {
    return 0;
  }
}

myFunc(123); */

function myFunc2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // assertion 문법(타입 덮어쓰기)
  return array[0];
}
console.log(myFunc2("123"));

/* 
    Narrowing으로 판정해주는 문법들
    1. typeof 변수
    2. 속성명 in 오브젝트자료
    3. 인스턴스 instanceof 자료
*/
