/*
The variable defined with const cannot be redeclared.
it cannot be reassigned and it have block scope.

*/

const c = 16;
console.log(c);

//const c = 13;
//c = 26;

{
    const d = 10;
    console.log('Inside block ' + d);
}

//console.log(d);
