/* (숙제1) 다음 변수 4개에 타입을 지정해봅시다. */
/* 
let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];
*/

let hw_user :string = "kim";
let hw_age :(undefined | number) = undefined;
let hw_married :boolean = false;
let hw_철수: (string | number | undefined | boolean)[] = [
  hw_user,
  hw_age,
  hw_married,
];



/* (숙제2) 학교라는 변수에 타입지정해보십시오. */

/* 
let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
*/

let kk학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[],
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
kk학교.score[4] = false;
kk학교.friend = ["Lee", kk학교.teacher];