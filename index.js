const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions')

inquirer
  .prompt(questions)
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

fs.writeFile('logo.svg', data, (err) =>
  err ? console.error(err) : console.log('Success!')
);