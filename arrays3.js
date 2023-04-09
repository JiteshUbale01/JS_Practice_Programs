/**
 * Write a javascript program to convert a comma-seperated values(CSV) string to a 2-D array. A new line indicates a new row in an array
 * 
 * 
 * Example:
 * ---------
    abc,def,ghi
    jkl,mno,pqr
    stu,vwx,yza
 */


const csvConverter=(str)=>
    str.split('\n').map(item=>item.split(","));        
;

let a=`abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

let b=`abs,def,ghi
jul,moo,pur
sui,vwx,yza`;

let c=`abd,def,gha
kla,mon,eqr
stud,vfx,bza`;

console.log(csvConverter(a));


console.log(csvConverter(b));


console.log(csvConverter(c));