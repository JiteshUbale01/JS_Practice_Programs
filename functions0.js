/**
 * Write a javascript function that returns true if the provided predicate function returns true for all elements in an collection, false otherwise
 */

let arr1=[1,2,3,4,5,6];
let arr2=[2,4,6,8,10,12,14,16,18,20];

let arr3=[
    {name:"maserati",
    hp:500},
    {
        name:"gtr500",
        hp:400
    },
    {
        name:"supra",
        hp:700
    }
];

console.log(arr1.every(it=>it>0));

console.log([1,2,3,4,5].every(it=>it%3==0));

console.log(arr2.every(it=>it%2===0));

console.log(arr3.every(item=>item.hp>200));

console.log(arr3.every(item=>item.name=="bugatti"));


/**Array.every() method is a one of the many methods of the array objects.
 * 
 * This method takes a callback function as a parameter, it iterates through each item in
 * the array and checks the condition mentioned in the callback function 
 * 
 * If all the items in the array passes the condition this method will return true or else it will return false
 */

/**This same question can be done using traditional for loop in the following manner */


function iterator(arr,fn){
    for(let i=0;i<arr.length;i+=1){
        if(!fn(arr[i])){
            return false;
        }
    }

    return true;
}

console.log(iterator(arr1,(ch)=>ch>0));


