let 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
    { product: "청소기", price: 7000, card: false }
];
const testInterFunc = {
    plus(num1, num2) {
        return num1 + num2;
    },
    minus(num1, num2) {
        return num1 - num2;
    },
};
console.log(testInterFunc.plus(3, 2));
console.log(testInterFunc.minus(3, 2));
