class Car {
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1.tax());
