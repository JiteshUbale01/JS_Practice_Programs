/**
 * Write a javascript program to implement the binary search algorithm
 * Use the traditional approach without any predefined method 
 * try without recursion
  
 */

let low=0,high=arr.length-1,flag=0;

const binSearch=(arr,key)=>{
    let mid;
    while(low<=high){
        mid=Math.ceil((low+high)/2);
        if(arr[mid]===key){
            flag=1;
            break;
        }
        else if(key<arr[mid]){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }

    if(flag===1){
        return `Element found at index ${mid}`;
    }
    else{
        return `Element not found!!!!.....`;
    }
    
};


console.log(binSearch([1,2,3,4,5,6,7,8,9,10,11],3));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],5));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],8));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],10));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],20));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],1));

console.log(binSearch([1,2,3,4,5,6,7,8,9,10],12));
