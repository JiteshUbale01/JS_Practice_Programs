/**
 * write a javascript program to get the extension of the filename.
 */

const getFileExt=(str)=>str.slice(str.lastIndexOf('.'));

console.log(getFileExt("world.java"));
console.log(getFileExt("hello.py"));
console.log(getFileExt("shadow.js"));
console.log(getFileExt("ghost.cpp"));
console.log(getFileExt("anime.c"));
console.log(getFileExt("water.css"));
console.log(getFileExt("index.html"));


/**NOTE
 * str.lastIndexOf() method takes a character as an argument and returns the last occurence of the character in the string
 * 
 * For example take str="styles.css" and we are using
 * str.lastIndexOf('.'); and we are passing character '.' as an argument
 * the above method will return the last occurence or index of the given character.
 */

