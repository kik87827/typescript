function nFunc(a :string | undefined){
    if(a && typeof a === "string"){

    }else{

    }
}


type Fish = {swim :string};
type Bird = {fly :string};

function checkFB(animal :Fish | Bird){
    if('swim' in animal){
        
    }
}



type CarType = {
    wheel : '4개',
    color : string
}

type BikeType = {
    wheel : '2개',
    color : string
}

function checkCB(x :CarType | BikeType){
    if(x.wheel === '4개'){
        console.log('x는 CarType');
    }else{
        console.log('x는 BikeType');
    }
}