let kikIs : 'frontend' | 'publisher';

kikIs = 'publisher'

function testFunc(a : 'hello') : 0 | 1{
    return 1;
}

testFunc('hello')

function rps22(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{
    return [a];
}

rps22('가위');

const cvarobj = {}


var mydata1 = {
    name : 'kim'
} as const

function mydataFunc(a : 'kim'){

}

// mydataFunc('kim')
mydataFunc(mydata1.name)