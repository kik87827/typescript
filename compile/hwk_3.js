function merryPos(month, home, att) {
    let score = 0;
    score += Math.floor(month / 10000);
    if (home) {
        score += 500;
    }
    if (att === '상') {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(merryPos(1500000, true, '중'));
