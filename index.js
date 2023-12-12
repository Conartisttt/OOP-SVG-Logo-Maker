const inquirer = require('inquirer');
const questions = require('./lib/questions');
const write = require('./lib/writeFile');

inquirer
  .prompt(questions)
  .then((response) =>
    write(response)
  );


