//way1
const calc = (a,b, operation) => {
    return operation(a,b);
}

const addition = calc(3, 4, function (num1, num2) {
    return num1 + num2;
} );

console.log(addition);

//way2
const sub = (a,b) => a - b;

const subResult = calc(6, 2, sub);

console.log(subResult);

//way3
const multiply = (a,b) =>
{
  return a * b;  
}

const mulCal = calc(3,4,multiply);
console.log(mulCal);


