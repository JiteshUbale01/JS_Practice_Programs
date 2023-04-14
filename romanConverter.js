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
}



let converter=(num)=>{
    let romanNumeral='';
    for(let key in arabic){
        let currentValue=arabic[key];
        while(currentValue<=num){
            num-=currentValue;
            romanNumeral+=key;
        }
    }

    return romanNumeral;
}


console.log(converter(1872));
console.log(converter(1245));
console.log(converter(1000));
console.log(converter(971));
console.log(converter(500));
console.log(converter(420));
console.log(converter(120));
console.log(converter(100));
console.log(converter(98));



/***
 * In this program, we have used for in loop method which iterates through each key-value pair similar to a conventional for loop.
 */

