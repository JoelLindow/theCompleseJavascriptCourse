// Lecture: variabes
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// LectureL variables 2
/*
var name = 'John';
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.')

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.')


var lastName = prompt('What is the Last Name?')
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.')
*/

// Lecture: operators
/*
var now = 2016
var birthYear = now - 26;
console.log(birthYear);

birthYear = now - 26 * 2;
// 2016 - 52
// 1964
// Multiplication comes before the subtraction. This is 'operator precedence'
// Operator Precidence Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = 3 + 5 * 4 - 6;
ageJohn = (3 + 5) * 4 - 6;

console.log(ageJohn);

ageJohn = ageMark = (3 + 5) * 4 - 1;

console.log(ageJohn);
console.log(ageMark);

ageJohn++;
console.log(ageJohn);

ageMark *= 2;
console.log(ageMark);
*/



//////////////////////////////////////////////////////////
// LectureL if/else statements
/*
var name = 'John'
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon!');
}

isMarried = false;

if(isMarried) {
  console.log('Yes!');
} else {
  console.log('No!')
}

if (23 == "23") {
  console.log('Something to print...')
}
// == will allow Javascript to see 23 integer as '23' string. It allows "type conversion"

if (23 === "23") {
  console.log('Something to print...')
} else {
  console.log('That aint the same thing, dude')
}
*/
/// === will not allow type conversion. Is strict down to datatype.


////////////////////////////////////////////////////
// Lecture: Boolean logic and switch
/*
var age = 20;

// age = prompt('what is Johns age?')

if (age < 20) {
  console.log('John is a teenager')
} else if (age >= 20 && age < 30) {
  console.log('John is a young man')
} else {
  console.log('John is a man.')
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
*/
// in switch statements you must manually tell it to break if
// it hits the condition or it'll keep running through other optiong

// Coding Challenge:

var joelHeight = 75;
var joelAge = 36;
var angelaHeight = 63;
var angelaAge = 30;
var jamesHeight = 66;
var jamesAge = 14;

var joelScore = (joelHeight + joelAge * 5);
var angelaScore = (angelaHeight + angelaAge * 5);
var jamesScore = (jamesHeight + jamesAge * 5);

console.log(joelScore + ': Joels Score');
console.log(angelaScore + ': Angelas Score');
console.log(jamesScore + ': James Score');

if (joelScore > angelaScore && joelScore > jamesScore) {
  console.log('Joel is the Winner!');
} else if (angelaScore > joelScore && angelaScore > jamesScore) {
  console.log('Angela is the Winner!');
} else if (jamesScore > angelaScore && jamesScore > joelScore) {
  console.log('James is the Winner!');
}

































//
