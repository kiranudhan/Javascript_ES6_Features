/*
it allows you to create functions in a cleaner way compared to regular expression.
syntax:
1. () => expression
2. (par1,par2) => expression
3. () => {
    statements
   }
4. (par1,par2) => {
    statements
}   

*/
//normal function
function greet() {
    console.log("Hellow world");
}
greet();

//arrow function
const greeting = () => {
    console.log("Hellow function");
}
greeting();


const repeat = (count) => {
    for(let i = 0; i < count; i++)
      console.log("repeat : " + i );
}

repeat(3);

const square = (num) => num * num;
console.log(square(2));

const add = (a,b) =>{
    return a + b;
}
console.log(add(5,3));