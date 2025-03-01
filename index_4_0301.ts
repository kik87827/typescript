
function funck(x : number) :number {
    
    // code
    return x * 2; 
}

// return 없는 함수 :void   파라미터 없으면 ? | x : undefined
function funck2(x? : number) :void {
    
}
function funck3(x : number | undefined) :void {
    
}

funck(30);

funck2();
funck3(undefined);