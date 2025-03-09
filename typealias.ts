type funcType = (a :string) => number;

let myFunc2345 :funcType = function(a){
    return 10;
}

type mdType = {
    name : string,
    plusOne : (x :number) => number,
    changeName : () => void
}

let memberData = {
    name : 'kim',
    plusOne(a){
        return a + 1
    },
    changeName : () => {}
}

/* type mdType = (a :number) => number; */

let mdplusOne :mdType = memberData.plusOne(5);

