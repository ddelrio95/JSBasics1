// Data types, variables, functions, loops, arrays.
//=============================================================
// There are 7 data types in JS: boolean, number, null, Undefined, String, Symbols, Objects.

// Boolean
var b = false
if (b) {
    console.log('Booleans are rule')
} else {
    console.log('Booleans are lame.')
}

var num = 1
if (num >= 5) {
    console.log('The number is bigger')
} else {
    console.log('The number is smaller')
}

// Null
var n = null
console.log(n * 32)

// Undefined
var a
console.log(a + 5)

// Number
var num = 1
var ber = 2
var sum = num + ber

console.log('The result is ' + sum)

// String
var Fname = 'Dario'
var Lname = 'del Rio'

console.log('The full name is ' + Fname + ' ' + Lname)

// Symbols
var sym1 = Symbol('foo')
var sym2 = Symbol('foo')
console.log(String(sym1) === String(sym2))

// Object
var myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'

console.log(myCar.make, myCar.model)

// When we declare a variable, use var if we pretend to use it outside of the code block, otherwise use let/const.
if (true) {
    var varVariable = 'This is true'
}
console.log(varVariable)

if (true) {
    let letVariable = 'This is true'
    console.log(letVariable)
}
// Functions

// Function declaration
function greet() {
    console.log('Hello there')
}
greet()

// Function expression
var somthing = function() {
    console.log('Express Something')
}
somthing()
    //============================================================

// Again (Convert them to Arrow function)
// Name function multiple parameters
function sum(a, b) {
    return a + b
}
let sum2 = (a, b) => a + b

// Name function with one parameter
function randomFunct() {
    return Math.random
}
let randomFunct2 = (number) => number >= 0

// Name function with no parameter
function randomNumber() {
    return Math.random
}
let randomNumber = () => Math.random

// Anonymus function "function with no name"
document.addEventListener('click', function() {
    console.log('click')
})
document.addEventListener('click', () => console.log('click'))