/**
 * Write a javascript program to merge two arrays and sort them in ascending order/descending order
 * 
 * for sorting use the predefined methods
 */

function descMerger(arr1,arr2){
    arr1.push(...arr2);
    arr1.sort((a,b)=>a<b?1:-1);
    return arr1;
}

function ascMerger(arr1,arr2){
    arr2.unshift(...arr1);
    arr2.sort((item1,item2)=>item1>item2?1:-1);
    return arr2;
}
console.log(descMerger([1,8,2,4,5],[7,3,6,10,9,12,14,20]));
console.log(ascMerger([1,8,2,4,5],[7,3,6,10,9,12,14,20]));
console.log(descMerger([11,18,92,24,95],[17,13,16,10,99,12,114,120]));
console.log(ascMerger([11,18,92,24,95],[17,13,16,10,99,12,114,120]));
console.log(descMerger([13,89,23,44,95],[77,63,66,107,69,162,174,920]));
console.log(ascMerger([13,89,23,44,95],[77,63,66,107,69,162,174,920]));
