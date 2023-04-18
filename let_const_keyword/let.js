/*
variable defined with let keyword cannot be redeclared.
it must be declared before use.
it have block scope {} ,variable declared in block cannot be accessed from outside the block.
we can redeclare that variable outside block
*/
let a = 10;
//let a = 20;
console.log(a);

{
    let b = 30;
    console.log('inside block ' + b);
}

let b = 40;
console.log(b);