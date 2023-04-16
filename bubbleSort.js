/**Write a javascript program to implement the bubble sort algorithm */

const bubbleSortdesc=(arr)=>{
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

    return arr;
}

const bubbleSortasc=(arr)=>{
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

    return arr;
}
console.log(bubbleSortdesc([18,8,12,10,15,20]));
console.log(bubbleSortasc([18,8,12,10,15,20]));
console.log(bubbleSortdesc([10,67,92,76,32,12]));
console.log(bubbleSortasc([10,67,92,76,32,12]));
console.log(bubbleSortdesc([69,54,12,10,7,43,80,100,129,763,129,16]));
console.log(bubbleSortasc([69,54,12,10,7,43,80,100,129,763,129,16]));


/**This program only demonstrated the implementation of the bubble sort algorithm by using only conventional methods */