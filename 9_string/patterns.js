// * Patterns in JavaScript often refer to regular expressions (regex), which are used for matching patterns in strings. Regular expressions are very powerful tools for searching, replacing, and validating strings based on specific patterns

// Create a Regular Expression 
let regex1="Hello"
console.log(regex1);

// constructor Notation 
let regex2 =new RegExp("hello");
console.log("Regular Expression 2=",regex2);

// Basic Pattern in Regular expression 
// Literal Characters:
if (regex2.test("hello")){
    // compare str to  RegExp using match() 
    console.log("both hello and regex2 are match");
}
if ("hello" === regex2.toString().slice(1, -1)) {
    // "/"1 and "/"-1
    //compare str to RegExp using match()
    console.log("both hello and regex2 match");
  }
  //Metacharacters: Special characters with a specific meaning in regex.
/*
.(dot): Matches any single char(except newline).
^: Anchors the pattern to the start of the string.
$: Anchors the pattern to the end of the string
[]: Matches any one of the characters in the brackets.
\d: Matches any digit (equivalent to [0-9]).
\w: Matches any word character (letters, digits, or underscores).
\s: Matches any whitespace character (spaces, tabs, line breaks).
*: Matches 0 or more occurrences of the preceding element.
+: Matches 1 or more occurrences of the preceding element.
?: Matches 0 or 1 occurrence of the preceding element
*/

let regex = /l./;
console.log(".", regex.test("hel.o"));

regex = /^hello world/;
console.log("^", regex.test("hello world"));
console.log("^", regex.test("world hello"));

regex = /[₹]/;
console.log("[]", regex.test("hel₹o"));

regex = /\d/;
console.log("\\d", regex.test("abc123"));
console.log("\\d", regex.test("abc"));

regex = /\w/;
console.log("\\w", regex.test("abc"));
console.log("\\w", regex.test("4545"));
console.log("\\w", regex.test("!@#"));

regex = /\s/;
console.log("\\s", regex.test("abc 123"));
console.log("\\s", regex.test("abc123"));

regex = /l*/;
console.log("*", regex.test("ola"));
console.log("*", regex.test("oa"));
console.log("*", regex.test("la"));
console.log("*", regex.test("ooa"));
console.log("*", regex.test("ao"));

regex = /#+/;
console.log("+", regex.test("#tweet"));
console.log("+", regex.test("#tweet#"));
console.log("+", regex.test("tweet#"));
console.log("+", regex.test("tweet"));

regex = /m?o/;
console.log("?", regex.test("money"));
console.log("?", regex.test("oney"));
console.log("?", regex.test("mmney"));

// Card Number	Card Type	Payment Status
// 5555 5537 5304 8194	MasterCard	APPROVED
// 5555 5555 5555 4444	MasterCard	APPROVED
// format one occurance or more of 5 5 5 4
regex = /^(5+\d{3})\s(5+\d{3})\s(5+\d{3})\s(\d{3}4$)/;
console.log(regex.test("5455 5537 5304 8194"));