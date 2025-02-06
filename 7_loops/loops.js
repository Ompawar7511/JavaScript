const {log}=require("console");
const {readline, createInterface}=require("readline");
const rl=createInterface({
    input:process.stdin,
    output:process.stdout,
});
//get input from user 
// rl.question("enter your name :",(username)=>{
//     console.log(`hello ${username}!!!`);
// });
// rl.question("enter first value :",(val1)=>{
//     rl.question("enter second value :",(val2)=>{
//         console.log("Addition of two number is=",parseFloat(val1)+parseFloat(val2));
//     });
// });
// print the striing using while loop
// string is immutable thats why you can not chage the string variable
// if we have to add element in string the we have to create one other element it show in ex.2 
// let str="Mango";
// let i=0;
// while(i<str.length){
//     console.log(str[i]);
//     i++;
// };
//ex.2
let str2="mango";
let element="";
let i2=0;
while(i2<str2.length){
   element+=str2[i2]+"🥭";
   i2++;
}
console.log("string after adding element :",element);