let membertype: number | string | boolean = 123; // 타입 2개 이상 합친 새로운 타입

membertype = 123;

let members: (number | string)[] = [1, "2", 3];

let memberobj: { a: string | number } = { a: "132" };

let membertest: any; // 타입실드 해제 - 비권장
membertest = 123;
membertest = [];

let membername: unknown; // 숫자 연산이 안된다
membername = 123;
membername = {};
