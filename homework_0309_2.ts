

/* 
(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

*/


type hwType22 = (a:string) => string
let cutZero2 = (a) => {
    const paraString = a.replace(/^0+/,"");
    return paraString;
}

type removeType2 = (a :string) => number
let removeDash2 = (a) => {
    const inDataParse = a.replace(/-/g,''); // 모든 '-'(대쉬)를 제거거
    return parseFloat(inDataParse);
}

function multiFunc(a, func1 :hwType22, func2 :removeType2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

multiFunc('010-1111-2222', cutZero2, removeDash2); // 1011112222