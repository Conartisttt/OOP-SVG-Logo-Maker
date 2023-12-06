const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions')

inquirer
  .prompt(questions)
  .then((response) =>
    writeFile()
  );


function writeFile(name, data) {
  fs.writeFile(`${name}.svg`, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
};