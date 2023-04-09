/*
 * Write a javascript program to get the largest even number from an array of integers 
 */

const evenNo=(arr)=>{
    let filterArr=arr.filter(item=>item%2===0);
    let max=0;
    for(let i=0;i<filterArr.length;i++){
        if(max<filterArr[i]){
            max=filterArr[i];
        }
    }

    return max;
}


console.log(evenNo([1,2,3,5,6,7,8,10]));
console.log(evenNo([5,9,13,16,21]));
console.log(evenNo([55,68,5,72,76,89]));
console.log(evenNo([22,50,12,44,32,57,30,11]));


/*
 * the another way of doing this is by using Math.max(method)and the spread operator

    max() method is used to find the maximum of the array element;
    and spread operator(...) is used to spread/iterate over array elements and the filter method can be used to find the even element in the array


    *this entire process can also be implemented on a single line as follows


    const evenNo=(arr)=>Math.max(...arr.filter(item=>item%2===0));

 */