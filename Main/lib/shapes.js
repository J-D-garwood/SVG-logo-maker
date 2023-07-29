//parent class -> shape
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
    //rendering shape function
    render() {
        return this.form
    }
    //function to display text with positioning dependent on text length
    displaytext() {
        if (this.text.length===3) {
            return `<text x="55" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        } else if (this.text.length===2) {
            return `<text x="85" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        } else {
            return `<text x="117" y="130" font-family="Times New Roman" font-size="90" fill="${this.textCol}">${this.text}</text>`
        }
    }
    //set color func.
    setColor(newCol) {
        this.col = newCol;
    }

}

//square child class constructor
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

//circle child class constructor
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

//triangle child class constructor
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

//module exports for index.js and testing
module.exports = {
    shape,
    square,
    triangle,
    circle
}