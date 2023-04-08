/*

Write a javascript program to create a new string from an given string taking first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more if not, the original string is returned.

*/


function Stringer(str){
    let newStr="";
    let n=str.length;
    if(str.length<3){
        return str;
    }
    else{
        newStr+=(str.slice(0,3)+str.slice(n-3,n));
        return newStr;
    }
}

console.log(Stringer("Shadow Corp"));
console.log(Stringer("rangers"));
console.log(Stringer("hi"));
console.log(Stringer("jitesh ubale"));

