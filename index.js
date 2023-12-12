const inquirer = require('inquirer');
const questions = require('./lib/questions');
const write = require('./lib/writeFile');

// launches inquirer prompts in terminal and passes responses to writeFile
inquirer
  .prompt(questions)
  .then((response) =>
    write(response)
  );


