function rot(str){
    let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result='';

    for(let i=0;i<str.length;i++){
        let index=alphabet.indexOf(str[i]);
        if(index===-1){
            result+=str[i];
        }
        else{
            let rotIndex=(index+13)%26;
            result+=alphabet[rotIndex];
        }
    }

    return result;
}

console.log(rot("HELLO"));
console.log(rot("JITESH"));
console.log(rot("VEGETA"));
console.log(rot("UMBRELLA"));


/**
 * PROBLEM STATEMENT
 


 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */