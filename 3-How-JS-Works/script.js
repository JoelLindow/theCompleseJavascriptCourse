/*
All Javascript code needs to run in an environment.
The environment is called "execution context".
Default execution context is the global context.
All code that's not inside of a function is executed.
Execution Context is kind of like an Object so
  everything we declare in the global context gets attached by the window context in the browser
What about code that IS in a fucntion?
  every time we call a function we get a new "execution context"
  basically, you add the function's execution context on top of the global context.

1) Creation Phase
  a) Creation of the Variable Object (VO)
  b) Creation of th scope chain
  c) Determine calue of the 'this' Variable

2) Execution Phase
  The code of the function that generated the current execution context is run line by line
  All variables are defined


What happens in the creation of the Variable Object?
- The argument object is created, containing all the arguments that were passed into the function
- Code is scanned for function declarations:
  - for each function, a property is created in the Variable Object, pointing to the function
- Code is scanned for variable declarations:
  - for each variable, a property is created in the Variable Object, and set to undefined

THIS IS IMPORTANT TO UNDERSTAND! SO WE'RE GONNA WRITE SOME CODE TO UNDERSTAND IT BETTER!
LET'S LOOK AT 'Hoisting' IN PRACTICE
*/

///////////////////////////////////////
// Lecture: Hoisting

/*
function calculateAge(year) {
  console.log(2016 - year)
}

calculateAge(1990);
// logs '26'
*/

//OR

/*
calculateAge(1990);

function calculateAge(year) {
  console.log(2016 - year);
}
// Still logs 26! This is becasue of hoisting!
// The environment is loaded before any code is executed!
// So the function can be called before the function is even defined in the code.
*/

/*
// let's try with a function expression

retirement(1990);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}
// THIS DOES NOT WORK because the function is not a function declaration
// Hoisting only works with declarations
*/

/*
//// Variables in Hoisting

console.log(age);
var age = 23;
// hoisting doesn't work with variables.
// code is scanned for variable declarations but they are set to undefined at First
// javascript knows this variable will exist. It just doesn't know what it's value will be.
*/

/*
console.log(age);
var age = 23;

function foo() {
  console.log(age);
  // this is undefined! No hoising in this scope!
  var age = 65;
  console.log(age);
  // this is going to log 65 becasue it's working in the execution context of the function
}

foo();
// see? it logged 65
console.log(age);
// but this logs 23 because it's defined in the variable object in the global context and doesn't know
// about the global context.
*/





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
