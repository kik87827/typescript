/* (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 */
/* 
function printName(men?: string): string {
  if (men) {
    return `안녕하세요 ${men}`;
  } else {
    return `이름이 없습니다`
  }
}

printName('홍길동');
printName();


function sayHi(men) :void {
  if (men) {
    console.log('안녕하세요' + men);
  } else {
    console.log('이름이 없어요');
  }
} */


/* 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오. */

/* function printLength(para :number | string) :number {
  const lengthPara = para.toString();
  return lengthPara.length;
}

 */
/* 
(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
*/


function merryPos(month: number, home: boolean, att: string) : string | void {
 /*  const calMonth = Math.floor(month / 10000);
  const calHome = home ? 500 : 0;
  const calAtt = att ==='상' ? 100 : 0;
  if (calMonth + calHome + calAtt >= 600) {
     return "결혼가능";
  } */
  
  let score: number = 0;
  score += Math.floor(month / 10000);
  if (home) {
    score += 500
  }
  if (att === '상') {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  } 
}

console.log(merryPos(1500000, true,'중'));