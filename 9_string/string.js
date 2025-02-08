// Creation of String 
// We can create string in double Quots or single quots
let str1="This is string creation";
console.log(str1);

// length of string 
console.log(str1.length);

//concatination of the string 
let firstName="Om";
let lastName="Pawar";
// type first 
console.log("Full Name=",firstName+lastName);
// type second
let fullName=firstName+" "+lastName;
console.log("FullName=",fullName);

// Accessing Character using index
// Index always start from '0'
let str3="CHARACTER";
//type first 
console.log("charAt index[3]=",str3[3]);
//type second
console.log("charAt index [4]=",str3.charAt(4));

// string methods
let str4="Om Santosh Pawar"
// convert string into uppercase
console.log("toUppercase=",str4.toUpperCase());
// covert string into lowercase
console.log("toLowercase",str4.toLowerCase());
// find the index perticular word starting from which 
console.log("index of =",str4.indexOf("Pawar"));
// Replace the string 
console.log("replace=",str4.replace("Om Santosh Pawar","Darshan Bhausaheb Kadam"));

// Split-i.e Seprate the date from (-)
let Date = "2025-02-08";
let [year, month, day] = Date.split("-");
console.log("year=", year, " month=", month, " day=", day);

// quote
let quote = 'he said "hello"';
console.log("quote=", quote);

//How to create Multistring 
let Multistring=`om pawar
asim shaikh
rutik petkar
vishwas hirade
abhii nandkhile`;
console.log("multisting=",Multistring);

//String are immutable thats why it can't replace any word 