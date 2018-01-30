// console.log('Hello World!')

// * VARIABLES AND DATATYPES:
// ----------------------------------------------------
// var name = 'John';
// console.log(name);
//
// var lastName = 'Smith';
// console.log(lastName);
//
// var age = 26;
// console.log(age);
//
// var fullAge = true;
// console.log(fullAge);

// * VARIABLE MUTATION AND TYPE COERCION
// ----------------------------------------------------

// var name = 'John';
// var age = 26;
//
// console.log(name + age);
// console.log(age + age);
//
// age = "twenty-six";
//
// var job, isMarried;
// job = "Developer";
// isMarried = true;
//
// console.log(name + ' is an ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is the last name?');
//
// console.log(lastName);
//
// alert(lastName);

// * OPERATORS
// ----------------------------------------------------
//
// var age = prompt('What is your birth year?')
// var birthYear = 2017 - age;
//
// console.log(birthYear);
//
// birthYear++;
//
// console.log(birthYear);

// * IF / ELSE STATEMENTS
// ----------------------------------------------------

// var name = 'Joel';
// var age = 63;
// var isMarried = 'yes';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' will hopefully marry soon!');
// }


// * IF / ELSE STATEMENTS CONTINUED W BOOLEAN LOGIC AND SWITCH
// ----------------------------------------------------

// var age = prompt('What is your age?');
//
// if (age < 20) {
//   console.log('User is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log('User is a young man');
// } else {
//   console.log('User is a man');
// }

// * SWITCH STATEMENT
// ----------------------------------------------------
//
// var job = 'cop'
//
// job = prompt('What does john do?')
//
// switch (job) {
//   case 'teacher':
//   console.log('John teaches kids.');
//   break;
//   case 'driver':
//   console.log('John is a cab driver');
//   break;
//   case 'cop':
//   console.log('John is a cop');
//   break;
//   default:
//   console.log('John does something else')
// }

// * CODING CHALLENGE # 1
// ----------------------------------------------------
//
// var friendOne, friendTwo, friendThree, friendOneCalculations, friendTwoCalculations, friendThreeCalculations
//
// // array item 1 is height in inches. item 2 is age in years
// friendOne = [72, 25];
// friendTwo = [74, 28];
// friendThree = [58, 30];
//
// friendOneCalculations = friendOne[0] + (friendOne[1] * 5)
// friendTwoCalculations = friendTwo[0] + (friendTwo[1] * 5)
// friendThreeCalculations = friendThree[0] + (friendThree[1] * 5)
//
//
// if (friendOneCalculations > friendTwoCalculations && friendOneCalculations > friendThreeCalculations) {
//   console.log('Friend One Is The Winner ' + friendOneCalculations + ' points!');
// } else if (friendTwoCalculations > friendOneCalculations && friendTwoCalculations > friendThreeCalculations){
//   console.log('Friend Two Is The Winner with ' + friendTwoCalculations + ' points!');
// } else {
//   console.log('Friend Three Is The Winner '+ friendThreeCalculations + 'points!');
// }


// * FUNCTIONS
// ----------------------------------------------------

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJoel = calculateAge(1981);
var ageAngela = calculateAge(1987);
var ageJames = calculateAge(2003);
console.log(ageJoel)
console.log(ageAngela)
console.log(ageJames)









//
