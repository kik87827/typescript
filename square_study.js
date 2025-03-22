interface SquareOptions {
    width? : number;
    height? : number;
    background? : string;
}

class SquareItem {
    static MAX_POSITION = 370;
    constructor({width=30,height=30,background='red'} :SquareOptions={}){
        this.sqwidth = width;
        this.sqheight = height;
        this.sqbackground = background;
    }

    private createElement() : HTMLDivElement {
        const boxItem :HTMLDivElement = document.createElement('div');
        boxItem.classList.add("item");

        Object.assign(boxItem.style,{
            width:`${this.sqwidth}px`,
            height:`${this.sqheight}px`,
            backgroundColor: this.sqbackground,
            top:`${Math.floor(Math.random() * SquareItem.MAX_POSITION)}px`,
        });

        return boxItem;
    }

    public draw() : void {
        document.querySelector("#square_container").appendChild(this.createElement())
    }
}