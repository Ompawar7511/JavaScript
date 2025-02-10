// Function- it is a block of code which is use for perform a perticular task,when you are call the function then it is executed 
// Regular function are the function simple declare with the function keyward 
function fun1(){
    console.log("This is Regular function");
}
fun1();//Calling of the function

// Methode: Methode are the function that are associated with object 
const fun2 ={
    name :"World",
    greet: function(){
        console.log("hello",this.name);//this keyward refer to current object user 
    },
};
fun2.greet();

// Function Return :A Function can return a value using the return keyward 
function fun3(num){
    return num*num;
}
let result=fun3(5);
console. log("result =",result);

//Named Function :Named Function have a name and are typically declared using the function keyward (same as regular function)
function fun4(){
    console.log("this is a named function ");
}
fun4();

// Anonymous Function: Anonymous functions are function that do not have a name . They are often used as function expressions.
const fun5=function(){
    console.log("This is an anonymous function ");
};
fun5();

// Arrow function: arrow funtion are a concise way to write funciton in javaScript.they use the => syntax 
const fun6 =(a,b)=>{
    return a+b; 
};
const answer=fun6(10,10);
console.log("Addition of two number is = ",answer);

//Function Expression: A function expression defines a function within an expression (return someting ).the function can be anonymous or named 
const fun7=function(x,y){
    return x*y;
};
console.log("Multiplication of two number is ",fun7(5,5));

// Arguments : The argument object is an array-like object available inside all non-arrow functions containing the passed argument 
function fun8(){
    console.log("Value of passed arguments are ",arguments);
};
fun8(1,2,3,4);
fun8(111,12,13,14,15);

// Variadic function are function that can accept any number of argumnet 
// argument object ()
function fun9(){
    let total=0;
    let arr = Object.values(arguments);
    arr.forEach((element)=>{
        total += element;
    });
    return total;
}
console.log("Total of the arguments is =",fun9(1,2,3,4));
console.log("Total of argument is =",fun9(11,12,13,14,15));

//RestParameter 
function fun10(...numbers){
    total=1;
    numbers.forEach((num)=>{
        total *= num;
    });
    return total;
}
console.log("Multiple of all number =",fun10(1,2,3));
console.log("multiple of all number =",fun10(1,2,3,4,5,6,7,8));

// Immediately Invoked Function Expession(IIFE): An IIFE is a Function that is definedd and immediately invoked 
(function (){
    console.log("IIFE function (it is invoked immediately)");
})();

// Generator Function: Generator function use function * syntax and allow pausing and resuming execution whith the yield keyword 
function* counter(stop){
    let cnt =1;
    while (cnt<=stop){
        yield cnt;//the yeild keyward is generator function (function*) to pause the function's execution and return a value 
        cnt++;
    }
}
const numbers =counter(10);
for(let i=0;i<=10;i++){
    console.log("counter=", numbers.next());
}

//Async Function : async function returns a promises and are use for handeling asynchronous operation You use the async keyword dbefore the function 
async function fetchData() {
    const response =await fetch("https://reqres.in/api/users?page=2",{
        method :"GET",
        body:null,
    });

    const data =await response.json();
    console.log("data = ",data);
}
fetchData();