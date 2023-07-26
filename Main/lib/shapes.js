class shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        if (text.length>3) {
            throw new Error('Logo text can not be longer than 3 characters');
          };
        this.text = text;
        this.textCol = textCol;
        this.col = col;
        this.form = ''
    }
    render() {
        return this.form
    }
    setColor(newCol) {
        this.col = newCol
    }
}

class square extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
        this.form = `<rect x="0" y="0" width="500" height="500" stroke="black" fill="${col}" stroke-width="1">`
    }
}
//<rect x="0" y="0" width="500" height="500" stroke="black" fill="green" stroke-width="1"></rect>
class circle extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
        this.form = `<circle cx="250" cy="250" r="250" stroke="black" fill="${col}" stroke-width="1">`
    }
}

class triangle extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
        this.form = `<polygon points="200 15, 400 400, 0 400" fill="${col}">`
    }
}

module.exports = {
    shape,
    square,
    triangle,
    circle
}