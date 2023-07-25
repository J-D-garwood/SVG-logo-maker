const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = (shape) =>

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
    .then((answers) => {
        
    })
