/**
 * Write a javascript program to generate a random hexadecimal color code
 */

const hexRandom=()=>
     Math.floor(((Math.random()*16))).toString(16).toUpperCase();
;

const randomColor=()=>"#"+Array.from({length:6}).map(hexRandom).join('');


console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());

