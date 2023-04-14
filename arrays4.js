/**write a javascript program to return the sum of even digits in an array */

const summed=(arr)=>{
    let newArr=[];
    newArr=arr.filter(item=>item%2===0);

    let sum=0;
    newArr.map(item=>sum+=item);

    return sum;
}


console.log(summed([1,2,3,4,5,6]));
console.log(summed([10,20,30,40,50,60]));
console.log(summed([100,200,300,400,500,600]));
console.log(summed([11,13,12,14,20,15,23]));
console.log(summed([21,33,52,34,60,69,83]));
console.log(summed([41,63,22,94,40,95,23]));
