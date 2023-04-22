/**Write a javascript program to implement the selection sort algorithm for sorting of array elements */


let descSorter=(arr)=>{
    let temp=0,pos;

    for(let i=0;i<arr.length;i++){
        pos=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[pos]<arr[j]){
                pos=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[pos];
        arr[pos]=temp;
    }

    return arr;
}

let ascSorter=(arr)=>{
    let temp=0,pos;

    for(let i=0;i<arr.length;i++){
        pos=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[pos]>arr[j]){
                pos=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[pos];
        arr[pos]=temp;
    }

    return arr;
}

console.log(descSorter([7,2,3,1,6,4,5]));
console.log(ascSorter([7,2,3,1,6,4,5]));


console.log(descSorter([80,100,20,10,30,60]));
console.log(ascSorter([80,100,20,10,30,60]));


console.log(descSorter([70,12,33,11,69,42,52]));
console.log(ascSorter([70,12,33,11,69,42,52]));


