/**
 * Write a javascript program to check whether a given array of integers is sorted in an ascending order
 */



const even=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]<arr[i]){
            return false;
        }
    }

    return true;
};


console.log(even([1,2,3,4,5,6]));
console.log(even([9,2,3,9,5,6]));
console.log(even([1,2,3,4,7,10,12,14,100]));
