function palindromeChecker(str){
    let revStr=str.split('').reverse().join('');

    if(revStr===str){
        return true;
    }
    else{
        return false;
    }

}

console.log(palindromeChecker("jitesh"));
console.log(palindromeChecker("eye"));
console.log(palindromeChecker("madam"));
console.log(palindromeChecker("huh"));
