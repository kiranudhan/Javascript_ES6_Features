/*
A callback is a function passed as an argument to another function.
*/

function callMe(){
    console.log("I am callback function");
}

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

greet('Kiran',callMe);