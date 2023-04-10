/**
 * Write a javascript program to convert an arabic number into an roman numeral
 */

const arabic={
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};


let romanConverter=(num)=>{
    let romanNum='';
    for(let item in arabic){
        let current=arabic[item];
        while(current<=num){
            num-=current;
            romanNum+=item;
        }
    }
    return romanNum;
};


console.log(romanConverter(1000));
console.log(romanConverter(2001));
console.log(romanConverter(1921));
console.log(romanConverter(1872));
console.log(romanConverter(978));
console.log(romanConverter(546));
console.log(romanConverter(420));
console.log(romanConverter(120));
console.log(romanConverter(98));
console.log(romanConverter(69));
console.log(romanConverter(54));
console.log(romanConverter(49));
console.log(romanConverter(31));
console.log(romanConverter(12));
console.log(romanConverter(10));
console.log(romanConverter(9));
console.log(romanConverter(7));
console.log(romanConverter(5));
console.log(romanConverter(2));
console.log(romanConverter(1));



/***
 * In this program, we have used for in loop method which iterates through each key-value pair similar to a conventional for loop.
 */

