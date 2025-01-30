/* object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요? */

/* type TypeA = { key1: number; key2: string };
type TypeB = { key2: number; key3: string };

type TypeMulti = TypeA & TypeB;
 */

type TypeA = { age: number | string };
type TypeB = { age: string };

type TypeC = TypeA & TypeB;

const person = { age: "30" };

type ObjType = { color?: string; size: number; readonly position: number[] };

const DataObj: ObjType = { color: "red", size: 1000, position: [1, 2, 3] };

type ObjType2 = { name: string; phone: number; email?: string };
const DataObj2: ObjType2 = { name: "kim", phone: 123, email: "abc@naver.com" };

type ObjType3 = { minor: boolean };
const DataObj3: ObjType2 & ObjType3 = {
  name: "kim",
  phone: 123,
  minor: true,
};
