// let str1 = "jatin"

// let str2 = " thakur"

// let str3 = str1 + str2

// console.log (str3)

// let str4 = "kuch"

// let str5 = " bhi"

// let str6 = str4 + str5

// console.log (str6)

/**==================**/

//there are 2 types of memory 
// stack and heap

//stack is used in primitive data types (number, string, boolean, null, undefined)

//heap is used in non-primitive data types (Array, object, functions)


let myyoutubename = "channelname"
// since this is string value and string is a primitive type datatype, its value will be stored in 
// stack.


let anothername = myyoutubename
anothername = "new channel name"

console.log(myyoutubename)
console.log(anothername)

//===========//

let userone = {
    email: "user@google.com",
    upiId: "user@ypl",
};


let usertwo = userone

usertwo.email = "jatin@google.com"

console.log(usertwo.email)

console.log(userone.email)




 let x = "5 number";


 let y = 1;

 console.log(x + y);














