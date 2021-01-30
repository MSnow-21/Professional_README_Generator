const inquirer = require ('inquirer');
const fs = require ('fs');

inquirer

.prompt([
    {
        type: 'input',
        name: 'projectitle',
        message: 'What is the title of this Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project',
    },
    // {
    //     type: 'input',
    //     name: 'tableofcontents',
    //     message: 'this will probably not be entered
    //     default: enter in table of contents content

    // }
    {
        type: 'input',
        name: 'createjson',
        message: 'What command creates a package.json on npm?',
        default: 'npm init',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command do you type in to install npm inquirer?',
        default: 'npm i inquirer',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide some usage guidlines and instructions for the user.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: ['Apache Licence 2.0', 'Boose Software License 1.0', 'GNU GPL v3.0', 'ISC', 'MPL 2.0', 'NONE'],
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please provide contributors guidlines for this project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your e-mail',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in your github username',
    }

]);


// fs.writeFile('log.txt', "trying this out", (err) =>
//   err ? console.error(err) : console.log('Success!')

// );



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
