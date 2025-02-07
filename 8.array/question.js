// Question 1
// How do you filter an array to include only string of a certain length (it check the lenght of arrya element)
let arr = ['apple', 'banana', 'chery', 'date'];
let lengthFive = arr.filter(str => str.length === 5);
console.log(lengthFive);
// Question 2
// How do you filter an array to exclude certain values (3)
let arr2=[1,2,3,4,5];
let excludeThree=arr2.filter(x=> x!=3);
console.log("Exclude 3 array=",excludeThree);
// Question 3
//  How do you filter an array of strings to include only those that contain a certain substring
let arr3=['apple','banana','cherry','date'];
let contains=arr3.filter(str=>str.includes('an'));
console.log(contains);
//Questiion 4
//. How do you filter an array of objects to include only those with a specific key?(age)
let arr4=[
    { name: 'Alice', age: 25 },
    { name: 'Bob' },
    { name: 'Charlie', age: 30 }
  ];
  let withAge=arr4.filter(obj=> 'age' in obj);
  console.log(withAge);
  // Question 5
  //How do you find the maximum value in an array
  let arr5=[12,43,23,56,41,10];
  let max=Math.max(...arr5);
  console.log(max);
  //Question 6
  //How do you find the difference between two arrays?
  let arr6=[1,2,3];
  let arr7=[2,3,4];
  let difference=arr6.filter(value=>!arr7.includes(value));
  console.log(difference);
  //7. How do you create an array of unique values from multiple arrays?
  let arr8=[1,2,3];
  let arr9=[3,4,5];
  let arr10=[5,6,7];
  let uniqueArr=[...new Set(arr8.concat(arr9,arr10))];
  console.log(uniqueArr);
  