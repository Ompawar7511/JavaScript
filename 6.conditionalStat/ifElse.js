// if Statement(check only one condition)
// following example check the condition is true or false if condition is true then it print the a is grater otherwise it cant print any statement 
let a=10;
if(a>10){
     console.log("a is Grater than 10");
}
// if else(check two condition )
// following example show  the if condition is true then it print (b is less than 20) otherwise it print (b is grater than 20) ie else part is executed.
let b=10;
if(b<20){
    console.log("b is less than 20");
}else{
    console.log("b is grater than 20");
}
// if else if (check one or more condtion )
// following example show the if else if statement ie it check the one or more conditions
let c=61;
if(c<=18){
    console.log("not eligible for driving motercycle");
}
else if(c>=60){
    console.log("You cant drive the motercycle because your age is grater than 60");
}
if(c<=60&&c>=18){
console.log("You can drive the motercycle");
}else{
    console.log("invalid input");
}
// nested if
//following example show the nested if 
let hrs = 9;
let minutes = 34;
if (hrs <= 12) {
  if (minutes <= 60) {
    console.log("correct time format");
  } else {
    console.log("minutes are wrong");
  }
} else {
  console.log("hrs are wrong");
}
