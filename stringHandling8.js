/**Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string */

let regex=/[aeiou]/gi;

const vowelCounter=(str)=>str.match(regex).length;

console.log(vowelCounter("jitesh"));
console.log(vowelCounter("javascript"));
console.log(vowelCounter("airindia"));
console.log(vowelCounter("adani group"));
console.log(vowelCounter("prime meridian"));
