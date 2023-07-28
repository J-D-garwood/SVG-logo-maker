class shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        if (text.length>3) {
            throw new Error('Logo text can not be longer than 3 characters');
          };
        this.text = text.toUpperCase();
        this.textCol = textCol;
        this.col = col;
        this.form = ''
    }
    render() {
        return this.form
    }
    displaytext() {
        if (this.text.length===3) {
            return `<text x="55" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        } else if (this.text.length===2) {
            return `<text x="85" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        } else {
            return `<text x="117" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        }
    }
    setColor(newCol) {
        this.col = newCol;
    }

}

class square extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<rect x="40" y="20" width="220" height="160" stroke="black" fill="${this.col}" stroke-width="1"></rect>`
    }
    setColor(newCol) {
        this.col = newCol;
        this.form = `<rect x="40" y="20" width="220" height="160" stroke="black" fill="${this.col}" stroke-width="1"></rect>`
    }
}
//<rect x="0" y="0" width="500" height="500" stroke="black" fill="green" stroke-width="1"></rect>
class circle extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<circle cx="150" cy="100" r="100" stroke="black" fill="${this.col}" stroke-width="1"></circle>`
    }
    setColor(newCol) {
        this.col = newCol;
        this.form = `<circle cx="150" cy="100" r="100" stroke="black" fill="${this.col}" stroke-width="1"></circle>`
    }
}

class triangle extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<polygon points="150 15, 280 160, 20 160" fill="${this.col}"></polygon>`
    }
    setColor(newCol) {
        this.col = newCol;
        this.form = `<polygon points="150 15, 280 160, 20 160" fill="${this.col}"></polygon>`
    }
}

module.exports = {
    shape,
    square,
    triangle,
    circle
}