/**Write a javascript function that returns a passed string with letters in alphabetical order.
 * 
 * example string: webmaestro
 * expected output:abeemorstw
 */

const sorter=(str)=> str.split('').sort((a,b)=>a>b?1:-1).join('');


console.log(sorter("webmaestro"));

console.log(sorter("balls"));

console.log(sorter("javascript"));

console.log(sorter("passion"));


/**
 * sort() method in array object takes a callback function and based on that callback function arranges the array elements in ascending order
 * 
 * in this current program sort((a,b)=>a>b?1:-1) simply compares two array elements at a time checks which among the two is greatest if a is greater than b it returns 1 as a value or else it will return -1
 * 
 * higher the value means more priority that means it will be more nearer towards the end of the array 
 */