/**You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order.
If there are no target indices, return an empty list. The returned list must be 
sorted in increasing order. */

const sortbyTarget=(nums,target)=>{
    let newArr=[]

    nums.sort((a,b)=>a>b?1:-1);

    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            newArr.push(i);
        }
    }

    return newArr;

    
    
}

console.log(sortbyTarget([1,2,5,2,3],2));
console.log(sortbyTarget([1,2,5,2,3],3));
console.log(sortbyTarget([1,2,5,2,3],5));




/**A problem by leetcode */