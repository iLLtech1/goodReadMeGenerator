const inquirer = require ('inquirer')
const fs = require ('fs')
const generateMarkdown = require ('./utils/generateMarkdown')
// array of questions for user
const questions = [
  {
    type: 'input', 
    name: 'github', 
    message: 'what is your github user name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'what is the description of your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'what is the licenses should your project have?',
    choices: ['MIT', 'Apache-2.0', 'BSD-3', 'GPL-3.0', 'NONE']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How does the user install this project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command does the user run, to run tests?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know to use the repo?'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to the repo?'
  }

];

// function to write README file
function writeToFile(fileName, data) {
  return fs. writeFileSync (path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then (inquirerResponses => {
    console.log ('generatingReadMe')
    writeToFile('README.md', generateMarkdown({...inquirerResponses}))
  })
}

// function call to initialize program
init();
