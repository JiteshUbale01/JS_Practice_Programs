/**Given an array nums sorted in non-decreasing order, return the maximum between the 
number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of
negative integers is neg, then return the maximum of pos and neg.

Note that 0 is neither positive nor negative. */

const counters=(nums)=>{
    let pos=nums.filter(item=>item>0);
    let neg=nums.filter(item=>item<0);
    let zero=nums.filter(item=>item===0);
    
    return (pos.length==0&&neg.length==0)?0:
    (pos.length>neg.length)?pos.length:neg.length;
}

console.log(counters([-2,-1,-1,1,2,3]));

console.log(counters([-3,-2,-1,0,0,1,2]));

console.log(counters([5,20,66,1314]));

console.log(counters([-1,-20,0,0,12,23,25]));

console.log(counters([-1,-2,-3,-4,-5,0,1,2,3]));

console.log(counters([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));

/**A problem by leetcode */