//const fs = require('fs')
const getNotes = require('./notes');
const validator = require('validator');

const message = getNotes();
console.log(message);

//console.log(validator.isEmail('test'));
//console.log(validator.isEmail('test@test.com'));

const validation = validator.isURL('google.com');
if(validation === false){
    console.log('Is False');
}else{
    console.log('Is True');

}

//console.log(validator.isURL('google.com'));