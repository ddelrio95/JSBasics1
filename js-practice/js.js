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
let somthing = () => console.log('Express Something')
somthing()
    // Another example of Function expression
var cost = $10
let printRecipt = () => console.log('the cost was ' + cost)
printRecipt()

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
    //========================ME======================================let ... = () => ...
let suma = (a, b) => a + b
suma()

let randomFunct = () => Math.random
random()

let randomNumber = () => Math.random
randomNumber()

document.addEventListener('click', () => console.log('click'))

let greet = (name, lasName) => console.log('Hello ' + name + '' + lastName)

//==========================NEW ARROW FUNCTIONS EXAMPLES=========================

// Traditional Function
let sumaDeCien = (a) => a + 100
sumaDeCien()

// Traditional Function
let name1 = (a, b) => a + b + 100

console.log(name1)

// Traditional Function (no arguments)
let a = 4
let b = 2

let sum1 = () => a + b + 100
console.log(sum1)

// Traditional Function
function sum2(a, b) {
    let c = 42
    return a + b + c
}
sum2()

let c = 42
let sum3 = (a, b) => a + b + c
sum3()

// Traditional Function
let bob = (a) => a + 100
console.log(bob)

var a = 10

let suma = (a) => a + 100
console.log(suma)