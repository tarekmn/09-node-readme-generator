// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  'What is the project title?',
  'What is your GitHub username?',
  'What is your email address?',
  'Please enter a description:',
  'Please enter installation instructions:',
  'Please enter usage information:',
  'Please enter contribution guidelines:',
  'Please enter test instructions',
  'Please choose your license:',
];






// TODO: Create a function to write README file
function writeToFile(data) {


  fs.writeFile('README.md', data, (err)=>
  err ? console.log("error") : console.log('ReadMe Created!'))


}


// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title'
    },
    {
      type: 'input',
      message: questions[1],
      name: 'username'
    },
    {
      type: 'input',
      message: questions[2],
      name: 'email'
    },
    {
      type: 'input',
      message: questions[3],
      name: 'description'
    },
    {
      type: 'input',
      message: questions[4],
      name: 'install'
    },
    {
      type: 'input',
      message: questions[5],
      name: 'usage'
    },
    {
      type: 'input',
      message: questions[6],
      name: 'guidelines'
    },
    {
      type: 'input',
      message: questions[7],
      name: 'test'
    },
    {
      type: 'list',
      message: questions[8],
      name: 'license',
      choices: ['MIT', 'ISC', 'MPL 2.0', 'IPL 1.0', 'none' ]
    },
  ])
  .then((data) => {
    console.log(data.title)
    console.log(data.test)
    console.log(data.license)
    writeToFile(generateMarkdown(data));
  })

 

}

// Function call to initialize app
init();
