//const fs = require('fs')
const getNotes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

const message = getNotes();
console.log(message);

//console.log(validator.isEmail('test'));
//console.log(validator.isEmail('test@test.com'));

const validation = validator.isURL('google.com');


if(validation === false){
    debugger;

    console.log(chalk.red('Is False'));
}else{
    debugger;

    console.log(chalk.green('Is True'));
}

//console.log(validator.isURL('google.com'));