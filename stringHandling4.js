/**
 * Write a javascript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string
 */

const formater=(str)=>{
    
    if(str.indexOf("New!")===0){
        return str;
    }
    else{
        return `New! ${str}`;
    }
};


console.log(formater("Delhi"));
console.log(formater("New! Phone"));
console.log(formater("Watches"));


