const inquirer = require ('inquirer');
const fs = require ('fs');

inquirer

.prompt([
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
        message: 'Please provide contributors guidlines for this project.',
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
        message: 'Please enter your e-mail',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in your github username',
    },

]);



// .then((response) => {
//     const filename = `${response.projectitle.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
// });


const generateREADME = (answers) =>
`
#Professional_README_Genetator

Project Title: ${answers.projecttitle}

Desscription: ${answers.description}

Tables of Contents:

* Installation Instructions
* Usage Information
* License Information
* Contribution Guidelines
* Test
* Questions

Installation Instructions:

* To create initialize npm application and create package.json document enter this command: ${answers.createjson}

* To download npm inquirer application enter in this command: ${answers.installation}

Usage Information

* This application requires the follow : ${answer.usageguidelines}

License Information

* Application License: ${answers.license}





`

// const README = generateREADME(answers);
// fs.writeFileSync('README.md',md);

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
