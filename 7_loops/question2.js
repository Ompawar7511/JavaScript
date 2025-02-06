//question :
/*
Scenario:
Imagine you are managing a charity event, and you need to distribute gift bags to participants. 
Initially, you have a starting number of gift bags (num). 
After each round of distribution, you remove a certain number of bags, defined by a variable n, 
and hand them out to the participants. 
You will continue this process until there are fewer than n bags remaining.

Your task is to create a program that helps you track and print the number of gift bags 
you have left after each round of distribution, stopping when there are fewer than n bags remaining.
 (using do While loop)*/
 let giftbag=100;
 let distributed=10;
 do{
    console.log("after distribution remaning gift bag is =",giftbag);
    giftbag-=distributed;
 }while(giftbag>=distributed);