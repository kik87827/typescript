/* Q1. 이 코드는 왜 에러가 나는 것이죠? */
/* let 나이: string | number;
나이 + 1; */

/* Q2. 이 코드도 왜 에러가 나는 것이죠? */
/* let 나이: unknown = 1;
나이 + 1; */

/* (숙제1) 다음 변수 4개에 타입을 지정해봅시다. */

let hw2user: string = "kim";
let hw2age: undefined = undefined;
let hw2married: boolean = false;
let hew2철수: (string | undefined | boolean)[] = [hw2user, hw2age, hw2married];

let 학교: {
  score: (number | undefined | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
