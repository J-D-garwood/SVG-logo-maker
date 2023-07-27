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
            return `<text x="75" y="300" font-family="Times New Roman" font-size="180" fill="${this.textCol}">${this.text}</text>`
        } else if (this.text.length===2) {
            return `<text x="115" y="300" font-family="Times New Roman" font-size="180" fill="${this.textCol}">${this.text}</text>`
        } else {
            return `<text x="190" y="300" font-family="Times New Roman" font-size="180" fill="${this.textCol}">${this.text}</text>`
        }
    }
    setColor(newCol) {
        this.col = newCol;
        console.log(this.col)
    }

}

class square extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<rect x="0" y="0" width="500" height="500" stroke="black" fill="${col}" stroke-width="1"></rect>`
    }
}
//<rect x="0" y="0" width="500" height="500" stroke="black" fill="green" stroke-width="1"></rect>
class circle extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<circle cx="250" cy="250" r="250" stroke="black" fill="${col}" stroke-width="1"></circle>`
    }
}

class triangle extends shape {
    constructor(text = "SVG", textCol = "white", col = "green") {
        super(text, textCol, col)
        this.form = `<polygon points="250 15, 500 400, 0 400" fill="${col}"></polygon>`
    }
}

const testShape = new triangle
testShape.setColor('blue')
console.log(triangle.col)

module.exports = {
    shape,
    square,
    triangle,
    circle
}