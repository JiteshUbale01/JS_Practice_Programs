/**Write a javascript program to search for searching the array elements using predefined methods in js as well as traditional approach
 * 
 * The program should return the index of the key element if not it should return -1.
*/

let search=(arr,key)=>arr.indexOf(key);

let linearSearch=(arr,key)=>{
    let flag=0;
    let i;
    for( i=0;i<arr.length;i++){
        if(arr[i]===key){
            flag=1;
            break;
        }
    }

    if(flag===1){
        return i;
    }
    else{
        return -1;
    }
}


console.log(search([1,2,5,4,9,6],4));
console.log(search([10,20,30,40,50],10));
console.log(search([11,25,52,41,90,69],69));
console.log(search([11,25,52,41,90,69],60));
console.log(search([11,25,52,41,90,69],20));



console.log(linearSearch([1,2,5,4,9,6],4));
console.log(linearSearch([10,20,30,40,50],10));
console.log(linearSearch([11,25,52,41,90,69],69));
console.log(linearSearch([11,25,52,41,90,69],60));
console.log(linearSearch([11,25,52,41,90,69],20));


/*
* Linear Search algorithm is one of the searching algorithms used to find an particular element from an group of elements

this algorithm iterates through the entire group of elements and return the index of the required element if found, else it will return -1.

now I have done this program in two methods one is traditional approach using for loops

 the other approach is by using Array.indexOf() method which takes one parameter and iterates through the array and finds the element. If the element is found, then it will return the index of the element or else it will return -1.
 */