/*
find() = returns the first value an array element that passes a test
findIndex() = returns the first index of an array element that passes a test
forEach() = calls a function for each element
map() = creates a new array with the results of calling a function for every array element
filter() = returns a new array with all elements that pass the test defined by the given function
every() = check whether all the elements of the array satisfy the given condition or not
some() = check whether at least one of the elements of the array satisfies the given condition or not

*/

const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

const firNeg = (num) => {
    return num < 0;
}

const result = a.find(firNeg);
console.log(result);

const firstNegNumIndex=a.findIndex(firNeg);
console.log(firstNegNumIndex);

a.forEach((num,index) => {
    console.log(num,index);
});