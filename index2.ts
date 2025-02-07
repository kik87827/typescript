let member: number | string = 123;
member = "123";

let memberGroup: (number | string)[] = [1, "2", 3];
let memberObj: { a: string | number } = { a: "123" };

let memberName: any = 123; // any 모든 자료 허용 => 타입 실드 해제
memberName = true;

let memberName2: unknown = 123;
memberName2 = 123;
memberName2 = [];

/* let var1: string = memberName2; */ // unknown(모든 자료형 허용) 타입이 any보다 안전하다

/* let memberAge2: unknown = 20;
memberAge2 += 1;
 */
