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
/*
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

*/

////////////////////////////////////////////////////
// Lecture: Functions
// Functions are like methods in Ruby. A machine that takes things in and puts out something new.
// Helps you keep code DRY.

// Calculate the year of birth using a Function
/*
function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log('John is ' + ageJohn);
console.log('Mike is ' + ageMike);
console.log('Mary is ' + ageMary);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0 ) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' is already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//////////////////////////////////////////////////////////////
// Lecture: Statements and Expressions
/*
function someFunction(par) {
  //code
  //this is an expression
}
console.log(someFunction('cow'))

var someFun = function(par) {
  //code
  //this is a statement. It holds the value in a variable.
}
*/

/////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'Teacher', false]

// push adds element to array at the end
john.push('blue');
console.log(john);

// unshift adds element to front of array
john.unshift('Mr.');
console.log(john);

// pop removes the last item in an array and returns the value
john.pop();
console.log(john);

// shift removes the first item on an array and returns the value
john.shift();
console.log(john);

// index of returns the index position of an array that matches the paramater
console.log('Index Position is ' + john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log('John is a teacher');
} else {
  console.log('John is NOT a teacher');
};
*/


///////////////////////////////////////////////////////////////
// Lecture: Objects
// Objects have Key - Value pairs. Unordered.
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false
}

console.log(john);
console.log(john.name + ' ' + john.lastName);
console.log(john['name'] + ' ' + john['lastName']);

var xyz = 'job';
console.log(john[xyz]);
// this will output job from hash/object

john.lastName = 'Miller';
john['job'] = 'Programmer'
;

console.log(john)
console.log(john[xyz]);

// Make a new object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'Retired';
jane['isMarried'] = true;

console.log(jane);
*/


///////////////////////////////////////////////////////////////////
// Lecture: Objects and methods
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function(yearOfBirth) {
      //this is a function experssion becasue we have a variable name / key we can call on
      return 2016 - yearOfBirth;
  }
};

console.log(john);
console.log(john.calculateAge(1990));
console.log(john.calculateAge(john.yearOfBirth));
// this is  little stupid. we need it to reference the yearOfBirth in the Object

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
      // 'this' means the current object you are working inside of
      return 2016 - this.yearOfBirth;
  }
};

// you still need to do the empty perenthesis for your method call with no arguments
console.log(john.calculateAge());
var age = john.calculateAge();
// now we add the age to the object!
john.age = age;
console.log(john);


// we should really just make the age attribute right away.
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
      this.age = 2016 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john)
console.log(john.age)
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Loops and Iterations








//
