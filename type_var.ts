type AnimalVar = string | number | undefined;
let animal: AnimalVar = 123;

type AnimalVar2 = { name: string; age: number };
let animal2: AnimalVar2 = { name: "kim", age: 20 };

const regionZone = { region: "seoul" };

regionZone.region = "busan";

type GirlType = { readonly name?: string; age: number };
const girl: GirlType = { name: "엠버", age: 20 };

/* girl.name = "유라";
 */

type Name = string;
type Age = number;

type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };
