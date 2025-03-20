function neverFunc() :never{
    while (true){

    }
}

function neverFunc01(para :string){
    if(typeof para === "string"){
        console.log(para)
    }else{
        console.log(para)
    }
}

const neverFunc02 = function(){
    throw new Error()
}