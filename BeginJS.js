console.log("Aditya")//console.log() is used to print something in the terminal
//Declaring variables:-
//(1). Here the value is locked and can't be changed
const var1 = 1011
//(2). Used to define a variable whose value can be changed. This solves the problem of block scope and functional scope that arises due to var
let var2 = 'aditya'
//(3). can also define a variable without let/const but it isn't preferred
var3 = '1156'
//(4). default value will be shown as undefined
let var4
//To print the values of different variables in tabular format:-
console.table([var1, var2, var3, var4])

//when we write this:- "use strict"; our code is interpreted to be written in newer JS syntax
// alert("Hello")-> not used like this in node, will look at it again later