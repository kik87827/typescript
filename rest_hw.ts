/* 
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/

/* const maxPrint = (...para :number[]) :number => {
    const paraArray = para;
    const paraFilter = paraArray.reduce((acc,cur)=> acc < cur ? cur : acc)
    return paraFilter;
}

console.log(maxPrint(1,2,15,3,4,5)); */

/* 
    (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

    함수( { user : 'kim', comment : [3,5,4], admin : false } )
    어떻게 코드를 짜야할까요?

    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

    (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/

type desMen = {
    user:string, comment:number[], admin : boolean
}

const destructuringPrint = ({user,comment,admin} :desMen) :void => {
    console.log(user,comment,admin);
}
destructuringPrint({ user : 'kim', comment : [3,5,4], admin : false });


/* 
    (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

    함수( [40, 'wine', false] )
    어떻게 코드를 짜야할까요?

    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

    (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
/* type multiTypeArray = (number | string | boolean)[];
const dataArray = ([a,b,c] :multiTypeArray) :void => {
    console.log(a,b,c);
}

dataArray([40, 'wine', false]); */

type multiType = (number | string | boolean)[];
const dataArray = ([a,b,c] :multiType) :void => {
    console.log(a,b,c);
}
dataArray([35,'bong',true]);