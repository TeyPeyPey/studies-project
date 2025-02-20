/**
 * VARIABLES:
 * 
 * 0: Variables are used to assign values. 
 * Variables work on many data types including numbers, strings, booleans, arrays, and objects, and many others. 
 * There are three keywords to declare a variable: var, let, const.
 * Variables declared using the keyword var can be changed once declared.
 * Variables using the keywords let or const can not be redeclared.
 * Variables are hoisted in javascript, meaning a variable declaration will always be hoisted to the top of your code. 
 * 
 * 1: Variables are created with the keyword var, followed by name you want for the variable.
 * var myName;
 * console.log(myName); // undefined
 * 
 * That is variable declaration, you still have to initilaztion and that involves assigning name.
 * 
 * var myName = 'Teyonce'
 * console.log(myName); // 'Teyonce'
 * 
 * variable myName is equal to a string of my name which is Teyonce.
 */

var myName; // variable declaration 
console.log(myName); // undefined prints to console
myName = 'Teyonce'; // reassigning myName
console.log(myName); // 'Teyonce' prints to the console