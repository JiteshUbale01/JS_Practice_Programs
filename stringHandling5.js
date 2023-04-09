/*
 * Write a javascript program to replace the first digit in a string (should contain at least digit) with $ character 
 */

const replacer=(str)=>str.replace(/[0-9]/,'$');

console.log(replacer("AB2jith"));
console.log(replacer("ABieei1"));
console.log(replacer("AB2grjoie"));