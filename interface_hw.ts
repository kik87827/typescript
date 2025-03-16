interface product {
    brand: string;
    serialNumber: number;
    model: string[];
}

let 상품: product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};


interface cart {
    product: string; price : number
}
interface cartEnd extends cart{
    card? : boolean
}

let 장바구니: cartEnd[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
  { product: "청소기", price: 7000, card: false }
]; 


/* 
(숙제4) object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 

*/

interface testInter {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

const testInterFunc: testInter = {
  plus(num1, num2) :number {
    return num1 + num2;
  },
  minus(num1, num2) {
    return num1 - num2;
  },
};
console.log(testInterFunc.plus(3, 2));
console.log(testInterFunc.minus(3, 2));