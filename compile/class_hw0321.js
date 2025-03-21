class Userhw {
    static x = 10;
    static y = 20;
    z = 30;
}
class Userhw2 {
    static x = 10;
    static y = 20;
    addOne(para) {
        Userhw2.x += para;
    }
    printX() {
        console.log(Userhw2.x);
    }
}
let userhwIns2 = new Userhw2();
userhwIns2.addOne(3);
userhwIns2.addOne(4);
userhwIns2.printX();
