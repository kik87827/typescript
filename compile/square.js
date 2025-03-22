class SquareItem {
    static MAX_POSITION = 370;
    sqwidth;
    sqheight;
    sqbackground;
    constructor({ width = 30, height = 30, background = 'red' } = {}) {
        this.sqwidth = width;
        this.sqheight = height;
        this.sqbackground = background;
    }
    createElement() {
        const boxItem = document.createElement('div');
        boxItem.classList.add("item");
        Object.assign(boxItem.style, {
            width: `${this.sqwidth}px`,
            height: `${this.sqheight}px`,
            backgroundColor: this.sqbackground,
            top: `${Math.floor(Math.random() * SquareItem.MAX_POSITION)}px`,
        });
        return boxItem;
    }
    draw() {
        document.querySelector("#square_container").appendChild(this.createElement());
    }
}
let sqareInstance = new SquareItem({ width: 30, height: 30, background: ' red' });
sqareInstance.draw();
sqareInstance.draw();
sqareInstance.draw();
sqareInstance.draw();
