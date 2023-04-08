/**
 * Write a javascript program to find the number of even digits in an array of integers
 */

const counter=(arr)=>{
    let newArr=arr.filter(item=>item%2==0);
    return newArr.length;
};

console.log(counter([1,2,3,4,5,6]));
console.log(counter([11,92,33,24,45,36]));
console.log(counter([41,21,13,99,50,62]));
console.log(counter([61,22,73,54,25,26]));
console.log(counter([110,192,103,144,115,106]));