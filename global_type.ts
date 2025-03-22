export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}


export interface ObjType {
    name: string,
    tall: number,
    age: number,
    handsome : boolean
}


export type ObjFunction = (a? :object) => void