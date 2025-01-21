/* 
    (숙제1) 숫자여러개를 array 자료에 저장해놨는데

    가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

    이걸 클리닝해주는 함수가 필요합니다. 

    클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

    [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

    모르는 부분은 구글검색해도 봐드림 
*/

const data = [1, 2, "3", "4", 5];

function fileterData(para: (string | number)[]): number[] {
  let filterArray: number[] = [];
  para.forEach((item) => {
    if (typeof item === "string") {
      filterArray.push(parseFloat(item));
    } else {
      filterArray.push(item);
    }
  });
  return filterArray;
}

console.log(fileterData(data));

/* 

*/

let objA = { subject: "math" };
let objB = { subject: ["science", "english"] };
let objC = { subject: ["science", "art", "korean"] };

/* function filterObj(obj: {
  [key: string]: string | string[];
}): string | string[] {
  const fobj = obj;
  if ("subject" in fobj) {
    if (typeof fobj.subject === "object") {
      return fobj.subject[0];
    } else {
      return fobj.subject;
    }
  }
} */

function filterObj(obj: { [key: string]: string | string[] }) {
  if (typeof obj.subject === "string") {
    return obj.subject;
  } else if (Array.isArray(obj.subject)) {
    return obj.subject[obj.subject.length - 1];
  } else {
    return "없음";
  }
}

console.log(filterObj(objA));
console.log(filterObj(objB));
console.log(filterObj(objC));
