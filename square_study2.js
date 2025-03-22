class Square{
    constructor(public width :number, public height :number, public color :string){}
    draw(){
        let a = Math.random();
        let square = `
            <div style="position:absolute; top: ${a * 400}; left : ${a * 400}; width: ${this.width}; height : ${this.height}; background: ${this.color}"></div>
        `
        document.body.insertAdjacentHTML('beforeend',square);
    }
}

let nemo = new Square(30,30,'red');
nemo.draw();
nemo.draw();
nemo.draw();
nemo.draw();