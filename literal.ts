let testname: "kim";
testname = "kim";

let mydata: "head" | "solo";

mydata = "solo";

function funcTest(a: "hello"): 1 | 0 {
  return 1;
}

funcTest("hello");

function rps(data: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["바위"];
}

rps("바위");

var dataSample = {
  name: "kim",
} as const;

function myDataFunc(a: "kim") {}

myDataFunc(dataSample.name);
