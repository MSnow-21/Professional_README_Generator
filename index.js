const inquirer = require ('inquirer');
const fs = require ('fs');


const generateREADME = (answers) =>

`#Professional_README_Generator

[![](https://img.shields.io/badge/LICENSE-${answers.license}-<COLOR>)](https://shields.io/)

Project Title: ${answers.projecttitle}

Description: ${answers.description}

Table of Contents:

* [Installation Instructions](#installation_instructions)
* [Usage Information](#usage_information)
* [License Information](#license_information)
* [Contribution Guidelines](#contribution_guidelines)
* [Testing Instructions](#testing_instructions)
* [Questions](#questions)


## Installation_Instructions:

* To create initialize npm application and create package.json document enter this command: ${answers.createjson}

* To download npm inquirer application enter in this command: ${answers.installation}


## Usage_Information

* This application requires the following usage guidelines : ${answers.usageguidelines}


## License_Information

* This appication is covered under: ${answers.license}


## Contribution_Guidelines:

* ${answers.usageguidelines}


## Testing Instructions:

Run ${answers.test} to confirm if application is running properly.


## Questions:

For any questions, here is my contact information:

GitHub

Profile: https://github.com/${answers.github}

Email: ${answers.email}

`

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projecttitle',
        message: 'What is the title of this Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project here: ',
    },
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
        name: 'usageguidelines',
        message: 'Please provide some usage guidelines and instructions for the user.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: ['Apache2.0', 'bsl1.0', 'GNUGPLv3.0', 'ISC', 'MPL2.0', 'MIT', 'NONE'],
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please provide contributors guidelines for this project: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is entered npm command is entered to test a package?',
        default: "npm test",

    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter in your github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in your email address: ',
    },

];


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
    const README = generateREADME(answers);
    fs.writeFileSync('README.md', README);
});

}
// Function call to initialize app
init();
