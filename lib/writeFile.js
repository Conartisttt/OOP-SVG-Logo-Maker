const fs = require('fs');
const shapes = require('./shapes')


function generateSVG(data) {
    switch (data.shape) {
        case "Circle":
            const circle = new shapes.Circle(data.text, data.textColor, data.shapeColor)
            writeToFile(circle.renderResult())
            break;
        case "Triangle":
            const triangle = new shapes.Triangle(data.text, data.textColor, data.shapeColor)
            writeToFile(triangle.renderResult())
            break;
        case "Square":
            const square = new shapes.Square(data.text, data.textColor, data.shapeColor)
            writeToFile(square.renderResult())
            break;
    }

    function writeToFile(data) {
        fs.writeFile(`logo.svg`, data, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        )
    }
}





module.exports = generateSVG;