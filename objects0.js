/**
 * Write a javascript program to compare two objects to determine if the first one contains the same properties as the second one(which may also have additional properties)
 */


const compare=(obj1,obj2)=>
    Object.keys(obj1).every(key=>obj2[key]);
;


let a={name:"supra",version:4,hp:500};
let b={name:"aventador",version:1,hp:400,maker:"lamborghini"};


console.log(compare(a,b));


/**
 *Object values can be accessed in two ways either using dot notation(.) or the bracket notation [] like this
 
 a.name or a[name] both are same in this case, it can be used depending upon the context
 
 * the Object.keys() method is used to return the keys present in an object it takes object variable as an argument and generates keys for that object

 * Example:   Objects.keys(obj1);
    the above method returns an array of keys of the object obj1
 
 * In this problem we are using Object.every() method which iterates through each object key and value pair and return those elements which fulfils specific call backs like in this case we are iterating through keys of second object  
 
 * So the statement
    Object.keys(obj1).every(item=>obj2[item]);
    this simply means check every item of obj2 and tell whether the key from obj1 is also present in obj2. If yes, return true or else return false
 
 * */