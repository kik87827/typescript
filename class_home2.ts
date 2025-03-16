/* 
(숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 

2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 

3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
*/

class Word {
    num: number[] = [];
    str: string[] = [];
    constructor(...arg : (number | string)[]) {
        arg.forEach((item) => {
          if (typeof item === "number") {
            this.num.push(item);
          } else if (typeof item === "string") {
            this.str.push(item);
          }
        });
    }
}

let obj = new Word('kim', 'park',3,5);
console.log(obj.str,obj.num);