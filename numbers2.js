/**
 * Write a javascript program to find the number of even values upto a given number.
 */

const counter=(arr)=>
    arr.filter(item=>item%2===0).length;
;

const evenArray=(num)=>{
    let retArray=[];

    for(let i=1;i<=num;i++){
        retArray.push(i);
    }

    return retArray;
};


console.log(evenArray(10));

console.log(counter(evenArray(10)));

console.log(evenArray(12));

console.log(counter(evenArray(12)));

console.log(evenArray(6));

console.log(counter(evenArray(6)));
