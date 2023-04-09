/**
 * Write a javascript program to generate a random hexadecimal color code
 */


const randomHex=()=>
    Math.floor(Math.random()*16).toString(16).toUpperCase();

console.log(randomHex())
console.log(randomHex())
console.log(randomHex())
console.log(randomHex())
console.log(randomHex())


