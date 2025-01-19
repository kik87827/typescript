// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let kikName :string = 'kim in kyung';
let kikAge :number = 42;
let kikFrom :string = 'Busan';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

let kikFav :{ [key : string] : string } = { favSong : 'How Sweet', favSinger : '뉴진스'}

// 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }
let project :{ member : string[] , days : number, started : boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}