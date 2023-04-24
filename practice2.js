// palindrome checker in js


// function checker(str){
//     let reverseStr=str.split('').reverse().join('');
//     console.log(reverseStr);
//     if(reverseStr===str){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// console.log(checker("madam"));

// function reverser(str){
//     let revStr="";
//     for(let i=str.length-1;i>=0;i--){
//         revStr+=str[i];
//     }
//     return revStr;
// }

// console.log(reverser("jitesh"));


// function romanConverter(num){

//     const roman={
//         M:1000,
//         CM:900,
//         D:500,
//         CD:400,
//         C:100,
//         XC:90,
//         L:50,
//         XL:40,
//         X:10,
//         IX:9,
//         V:5,
//         IV:4,
//         I:1
//     };

//     let str="";

//     for(let key in roman){
//         let i=roman[key];

//         while(i<=num){
//             num-=i;
//             str+=key;
//         }
//     }

//     return str;

// }

// console.log(romanConverter(89));

/**Linked list implementation in js */

//creating a user-defined data type called node
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
    }

    push(data){
        // if(this.head===null){
        //     return this.head=new node(data);
        // }

        if(!this.head){
            return this.head=new node(data);
        }

        let current=this.head;

        while(current.next){
            current=current.next;
        }
        current.next=new node(data);
    }

    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

    pop(){
        
    }
}


let l1=new linkedList();
l1.push(10);
l1.push(20);
l1.push(30);
l1.printList()


