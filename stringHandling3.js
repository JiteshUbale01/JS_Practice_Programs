/**
 * Write a javascript program to check a given string contains 2 to 4 occurences of a specified character
 */


const counter=(str,char)=>str.split('').filter(ch=>ch===char).length;

const repeat=(str,char)=>counter(str,char)>=2&&counter(str,char)<=4;

console.log(repeat("OOOH!","O"));
console.log(repeat("hello","l"));
console.log(repeat("jitesh","i"));
console.log(repeat("masachussets","s"));