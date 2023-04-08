/**
 * Given two values, write a javascript program to find out which one is nearest 100
 */

const closestto100=(num1,num2)=>(100-num1)<(100-num2)?num1:num2;

console.log(closestto100(80,90));
console.log(closestto100(12,19));
console.log(closestto100(50,30));
console.log(closestto100(70,50));
console.log(closestto100(40,10));