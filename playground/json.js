const fs = require('fs');

const person = {
    name:'Andrew',
    planet: 'Earth',
    age: 27
}

const personJSON = JSON.stringify(person);

fs.writeFileSync('personJSON.json', personJSON);

const personBUFFER = fs.readFileSync('personJSON.json');
const personRead = personBUFFER.toString();
const personOBJ = JSON.parse(personRead);

const newName = 'John';
const newAge = 28;

personOBJ.name = newName;
personOBJ.age = newAge;

const personReadJSON = JSON.stringify(personOBJ);


fs.writeFileSync('personJSON.json', personReadJSON);


/*
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
fs.writeFileSync('dataJSON.json', bookJSON);
const dataBuffer = fs.readFileSync('dataJSON.json');
console.log(dataBuffer.toString());
*/