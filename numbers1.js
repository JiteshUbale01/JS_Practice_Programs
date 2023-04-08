/**
 * Write a javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of two numbers is 100
 */


const numbers=(a,b)=> a+b==100?true:a==100||b==100?true:false;

console.log(numbers(20,80));
console.log(numbers(100,20));
console.log(numbers(50,50));
console.log(numbers(10,100));

console.log(numbers(90,89));