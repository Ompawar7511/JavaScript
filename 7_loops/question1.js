//question:
/*
Problem:
You are given a scenario where there are 100 doors, all initially closed, and a monkey with the number N. 
The monkey walks through the doors and toggles the state (open/close) 
based on whether the door number is divisible by the monkey's number (N in this case). 
Write a program that counts how many doors are open and how many are closed 
after the monkey has walked through all the doors.
*/
let monkey = 26;
let closedoor = 100;
let opendoor = 0;
for (let d = 1; d <= 100; d++) {
  if (d % monkey == 0) {
    opendoor++;
    console.log("opened=", d);
    closedoor--;
  }
}
  console.log("total open door is=",opendoor);
  console.log("total close door is =",closedoor);
