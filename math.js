class Math {
    constructor(x, y, znak) {
        this.x = x;
        this.y = y;
        this.znak = znak;
    }

    confirm() {
        const result = confirm(`${this.x} ${this.znak} ${this.y}`);
        return result;
    }

    checkResult() {
        const { x, y, znak } = this;
        const result = eval(`${x} ${znak} ${y}`);
        alert(`${x} ${znak} ${y} = ${result}`);
    }
}

const mathRes = confirm('Введіть вираз у форматі "число1 знак число2"');

if (mathRes) {
    const math = prompt('Введіть вираз у форматі "число1 знак число2"');
    const [x, znak, y] = math.split(' ');
    const mathExr = new Math(Number(x), Number(y), znak);
    mathExr.checkResult();
} else {
    const mathExr = new Math(16, 2, '/');
    mathExr.checkResult();
}
