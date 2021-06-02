/*
let add=()=>{
    console.log("hello welcome");
}
add();

*/
/* using fatarrow  gives advantages

1. consice code/shorter code 
2. function overloading conflicts will resolve
3. this- return on minimla Object
4. implicit return
*/
/*
let add=(a,b)=>{
    console.log(a+b);
}
add(6,8);
*/
/*
let add=(a,b)=>a+b;
console.log(add(4,7));
*/

let add=(a,b)=>{
    return a+b;
}

let result=add(5,8);
console.log(result);


















