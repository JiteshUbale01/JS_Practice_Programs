/**
 *  Given an integer array nums and an integer val, remove all occurrences of val in nums
    in-place. The order of the elements may be changed. Then return the number of elements
    in nums which are not equal to val.

 *  Consider the number of elements in nums which are not equal to val be k, to get
    accepted, you need to do the following things:

 *  Change the array nums such that the first k elements of nums contain the elements
    which are not equal to val. The remaining elements of nums are not important as
    well as the size of nums.

    Return k.
 */

const remover=(arr,val)=>{
    let newArr=arr.filter(item=>item!==val);

    return (newArr.length,newArr);
};

console.log(remover([3,2,2,3],3));
console.log(remover([0,1,2,2,3,0,4,2],2));
console.log(remover([1,1,2,2,3,3,4,4,4,6,5,7,4,4,4,10],4));


/**A problem by LEETCODE */