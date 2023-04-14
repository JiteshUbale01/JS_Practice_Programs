
/**Write a javascript program to check whether a given string is palindrome or not */


function palindrome(str){
    let revStr=str.split('').reverse().join('');

    if(revStr===str){
        return "It's a palindrome";
    }
    else{
        return `It's not a palindrome`;
    }
}


console.log(palindrome("eye"));
console.log(palindrome("jitesh"));
console.log(palindrome("boat"));
console.log(palindrome("madam"));
