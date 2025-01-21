function funcObj(x: number): number {
  return x * 2;
}
funcObj(10);

function funcObj2(x?: number): void {}
funcObj2();

function funcObj3(x: number | string): void {
  if (typeof x !== "string") {
    console.log(x + 3);
  }
}
