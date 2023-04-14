/**
 * Write a javascript program to get the current date.
 * 
 * Expected Output:
 * 
 * mm/dd/yyyy or dd/mm/yyyy or mm-dd-yyyy or dd-mm-yyyy
 */


const currentDate=(date=new Date())=>{
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();

    return `${day}/${month}/${year}`;
}

console.log(currentDate());

/**
 * the ${} is used when we want to show the value of a variable to the user
 * 
 * the date object is used to generate date it has several methods which can be used to get
 * date,day,minutes,seconds,milliseconds,year,month and many more
 * 
 * 
 */