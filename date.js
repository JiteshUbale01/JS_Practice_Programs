/**
 * Write a javascript program to get the current date.
 * 
 * Expected Output:
 * 
 * mm/dd/yyyy or dd/mm/yyyy or mm-dd-yyyy or dd-mm-yyyy
 */


const myDate=(date=new Date())=>{
    const days=date.getDate();
    const months=date.getMonth()+1;
    const years=date.getFullYear();

    return `${days}/${months}/${years}`;

};

console.log(myDate());