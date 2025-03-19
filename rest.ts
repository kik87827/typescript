// rest parameter
function restFunc01(...para :number[]){
    console.log(para);
}

restFunc01(1,4,5,6,7,8);


let arr = [1,2,3];
let arr2 = [4,5];

let arr3 = [...arr,...arr2];
/* console.log(arr3); */


let [var1,var2]=['안녕',100];

/* console.log(var1); */


/* let {MenStudent, MenAge} = { MenStudent : true, MenAge : 30}; */

/* console.log(MenStudent); */

/* interface menPara {
    MenStudent : boolean,MenAge : number
} */

    type menPara = {
        MenStudent : boolean,MenAge : number
    }

function menFunc({MenStudent,MenAge} :menPara){
    console.log(MenStudent,MenAge);
}

menFunc({MenStudent : false , MenAge : 40});