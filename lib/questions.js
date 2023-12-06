const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
      validate: (answer) => !answer ? "You must provide a title" : true
    },
    {
      type: 'input',
      message: 'What is your password?',
      name: 'password',
      validate: (answer) => !answer ? "You must provide a title" : true
    },
    {
        type: 'list',
        message: 'What shape would you like to create?',
        choices: [ "Circle", "Triangle", "Square"],
        name: 'shape',
    },
  ]

  module.exports = questions;