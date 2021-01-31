const inquirer = require ('inquirer');
const fs = require ('fs');


const generateREADME = (answers) =>

`#Professional_README_Generator

Project Title: ${answers.projecttitle}

Desscription: ${answers.description}

#Table of Contents:

1. [Installation Instructions](#installation_instructions)
2. Usage Information
3. License Information
4. Contribution Guidelines
5. Test
6. Questions


## Installation_Instructions:

* To create initialize npm application and create package.json document enter this command: ${answers.createjson}

* To download npm inquirer application enter in this command: ${answers.installation}


Usage Information

* This application requires the following usage guidelines : ${answers.usageguidelines}


License Information

* This appication is covered under: ${answers.license}


Contributing Guidelines:

* ${answers.usageguidelines}


Testing Instructions:

Run : ${answers.test} to confirm if application is running properly.


Questions:

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
        choices: ['Apache Licence 2.0', 'Boose Software License 1.0', 'GNU GPL v3.0', 'ISC', 'MPL 2.0', 'NONE'],
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
