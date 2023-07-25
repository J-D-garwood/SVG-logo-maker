class shape {
    constructor(text, textCol, col) {
        this.text = text;
        this.textCol = textCol;
        this.col = col;
    }
}

class square extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
    }
    render() {
        
    }
}

class circle extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
    }
    render() {
        
    }
}

class triangle extends shape {
    constructor(text, textCol, col) {
        super(text, textCol, col)
    }
    render() {
        
    }
}

module.exports = {
    shape,
    square,
    triangle,
    circle
}