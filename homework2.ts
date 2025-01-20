let user: string = "kim";
let userage: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, userage, married];

type scrollType = {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
};

let school: scrollType = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
