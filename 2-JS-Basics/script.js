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

var age = 25;

// age = prompt('what is Johns age?')

if (age < 20) {
  console.log('John is a teenager')
} else if (age > 20 && age < 30) {
  console.log('John is a young man')
} else {
  console.log('John is a man.')
}


































//
