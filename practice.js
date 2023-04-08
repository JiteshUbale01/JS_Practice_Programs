// // Comment

// var a=10;
// console.log(a);


// var A="strings in me";
// console.log(A)


//to get mathematical constants and math methods we are using two different functions 

// function mathematicalConstant(code){
//     switch(code){
//         case "E":
//             console.log(Math.E);
//             break;

//         case "P":
//             console.log(Math.PI);break;
        
//         case "S":
//             console.log(Math.SQRT2);break;

//         case "s":
//             console.log(Math.SQRT1_2);break;

//         case "L":
//             console.log(Math.LN2);break;
        
//         case "l":
//             console.log(Math.LN10);break;

//         case "LE":
//             console.log(Math.LOG2E);break;

//         case "le":
//             console.log(Math.LOG10E);break;

//         default: 
            
//             break;
//     }


// }


// function operation(number, code){
//     switch (code) {
//         case "r":
//             console.log(Math.round(number));            
//             break;
        
//         case "c":
//             console.log(Math.ceil(number));
//             break;

//         case "f":
//             console.log(Math.floor(number));
//             break;

//         case "t":
//             console.log(Math.trunc(number));
//             break;

//         case "s":
//             if(Math.sign(number)===1){
//                 console.log("positive");
//             }
//             else if(Math.sign(number)===0){
//                 console.log("NULL");
//             }
//             else{
//                 console.log("negative");
//             }


//         default:
            
//             break;
//     }
// }


// mathematicalConstant("E");
// mathematicalConstant("P");
// mathematicalConstant("S");
// mathematicalConstant("s");
// mathematicalConstant("L");
// mathematicalConstant("l");
// mathematicalConstant("LE");
// mathematicalConstant("le");



// operation(3.7,"r");
// operation(9.45,"c");
// operation(4.76,"f");
// operation(6.56,"t");
// operation(-3.6,"s");
// operation(0,"s");
// operation(3.8,"s");



// const arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// arr.forEach(item=>{sum+=item;});

// console.log(sum);


// const arr=[5,2,3,4,6,7,8,9,10,11,12,1];

// function insertion(arr,value,code){
//     switch(code){
//         case "end":
//             arr.push(value);
//             break;
        
//         case "start":
//             arr.unshift(value);
//             break;

//         default:
//             break;
//     }
//     console.log(arr);
// }

// function deletion(arr,code){
//     switch (code) {
//         case "end":
//             arr.pop();
//             break;
//         case "start":
//             arr.shift();
//             break;
//         default:
//             break;
//     }
//     console.log(arr);
// }
// console.log("original array: "+arr);
// deletion(arr,"end");
// deletion(arr,"start");
// insertion(arr,1,"start");
// insertion(arr,13,"end");


// const arr=[1,2,3,4,5,6,7,8,9];

// function squares(arr){
//     arr.forEach((item,i,array) => {
//         array[i]=item*item;
//     });
//     const newArr=[];
//     newArr.push(arr);
//     console.log("New Array: "+newArr);
//     return arr;
// }

// console.log("original modified array: "+squares(arr));


// function series(num){
//     let f1=0,f2=1;
//     let f,i=2;
//     let arr=[];
//     arr.push(0);
//     arr.push(1);
//     while (i<num){
//         f=f1+f2;
//         arr.push(f);
//         f1=f2;
//         f2=f;
//         i++;
//     } 

//     return arr;
// }

// console.log(series(2));
// console.log(series(3));
// console.log(series(6));
// console.log(series(4));
// console.log(series(10));


// STATUS ON HOLD
// function sentenceFormation(name,sen){

// }

// sentenceFormation("jitesh","Hello my name is ____");

// function throwDice(){
//     return Math.floor((Math.random()*6)+1);
// }


// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());
// console.log(throwDice());


// const str="Jitesh";

// console.log(str);

// console.log(str.charAt(3));

// const a="a";
// const b="A";

// if(a<b){
//     console.log(`${a} is less than ${b}`);
// }
// else if(a>b){
//     console.log(`${a} is greater than ${b}`);
// }
// else{
//     console.log(`${a} and ${b} are equal`);
// }

// console.log(a.toUpperCase());
// console.log(b.toLowerCase());



// const s1="2+4";

// const s2=new String("3+8-10"); 


// console.log(eval(s1));

// console.log(eval(s2));

// console.log(eval(s2.valueOf()));


// function factorial(num){
//     let res=1;
    
//     for(let i=1;i<=num;i++){
//         res*=i;
//     }
//     return res;

// }

// console.log(factorial(4));


// function factorial(num){
//     if (num!=0) {
//         return num*factorial(num-1);
//     } else {
//         return 1;
//     }
// }

// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(10));


// function reversal(str){
//     let revStr="";

//     for(let i=str.length;i>=0;i--){
//         revStr+=str[i];
//     }

//     return revStr;
// }

// console.log(reversal("hello jitesh"));


// console.log((Date.UTC(1970,01,01))*1000);

// const d=new Date();

// console.log(d.getDate());

// console.log(d.getMonth());

// console.log(d.getFullYear());

// console.log(d.getDay());


// const regex=/jitesh Jitesh JITESH jiTESH /ig;

// console.log(regex.test("Jitesh"));
