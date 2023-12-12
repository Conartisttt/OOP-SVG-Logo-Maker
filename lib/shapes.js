// Shape class to be inherited by other shapes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    renderResult() {
        return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            ${this.renderText()}
            </svg>
            `
    }
}

// triangle class that inherits functionality from shape class.
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="40px" font-weight="bold" >${this.text}</text>`
    }
}

// square class that inherits functionality from shape class.
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<rect x="10" y="10" width="180" height="180" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="34%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="60px" font-weight="bold" >${this.text}</text>`
    }
}

// circle class that inherits functionality from shape class.
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
    renderText() {
        return `<text x="35%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="60px" font-weight="bold" >${this.text}</text>`
    }
}

module.exports = {
    Triangle,
    Square,
    Circle,
}