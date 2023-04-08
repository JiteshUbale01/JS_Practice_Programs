/**
 * Write a javascript program to replace every character in a given string with the character following it in the alphabet
 */

const movers=(str)=>str
.split('')
.map(char=>String.fromCharCode(char.charCodeAt(0)+1))
.join('');


console.log(movers("abcd"));
console.log(movers("hello"));
console.log(movers("wraith"));
console.log(movers("kate"));


/**
 * NOTE:
 * In this program we have used the split() and join() method of arrays
 * 
 * the split() method takes a delimiting character based upon that character the entire string is split into an array
 * 
 * for example str="hello" please observe it is a sequence of characters h,e,l,l,o so when I call split('') method like this it will return an character array like this
 * ['h','e','l','l','o']
 * 
 * 
 * after split method we have called for the map() method
 * 
 * the map() simply modifies the array based on a condition in the callback function
 * 
 * there are two string methods  
 */

