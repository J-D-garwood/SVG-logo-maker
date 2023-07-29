const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('../Main/lib/shapes.js')


const generateSVG = (shape) => 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
            ${shape.render()}
            ${shape.displaytext()}
        </g>
    </svg>
</body>
</html>
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo\'s text:'
        },
        {
            type: 'input',
            name: 'textCol',
            message: 'Enter text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter your logo\'s shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeCol',
            message: 'Enter shape color:'
        },
    ])
    .then((res) => {
        if (res.shape === 'circle') {
            const testshape = new shapes.circle(res.text, res.textCol, res.shapeCol)
            return testshape
        } else if (res.shape === 'triangle') {
            const testshape = new shapes.triangle(res.text, res.textCol, res.shapeCol)
            return testshape
        } else {
            const testshape = new shapes.square(res.text, res.textCol, res.shapeCol)
            return testshape
        }
    }).then((newshape) => {
        const pageContent = generateSVG(newshape)

        fs.writeFile('./examples/logo.html', pageContent, (error) =>
        error ? console.log(error) : console.log('Successfully created logo.svg!'))
    })

    module.exports = {
        generateSVG
    }