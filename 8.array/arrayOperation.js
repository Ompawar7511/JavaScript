//Array is Mutable and we can change the array element 
//1.Creating array
let arr=[1,2,3,4,5];
//2.Accessing array Element 
console.log(arr[0],arr[1]);
//3.Adding element in array
//a.push-add element to the end
arr.push(6);
console.log(arr);//print all array
//b.unshift-add element in starting of the array
arr.unshift(0);
console.log(arr);
//4.Removing element from array
//a.pop-remove the last element of an array
arr.pop();
console.log(arr);
//b.shift-it remove the first element of the array
arr.shift();
console.log(arr);
//5.Findding Element in an array
//a.IndexOf-find the index of an element 
console.log(arr.indexOf(4));//find the value of an 4 index .
//b.includes-check if an element is exist or not 
console.log(arr.includes(5));// output show in the form of boolean value .
//6.Iterating Over an Array (print all elment of array using for loop)
for (let i=0;i<=arr.length;i++){
    console.log(arr[i]);
}
//b.ForEach- it also print all element af an array
arr.forEach(Element=>console.log(Element));
//7.Transforming Array
//a.Map-Using this operation we can change array element by performng any operation
let double=arr.map(x=>x*2);
console.log(double);//array element multiply by 2
//b.filter-create new array with all that pass the condition
let even =arr.filter(x=>x%2===0);//print the even number
console.log(even);
//b.Reduce: Executes a reducer function on each element, resulting in a single output value
let sum = arr.reduce((total, current) => total + current, 0);
console.log(sum);
//8. Modifying Arrays
//Splice: Adds/removes elements from an array
arr.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
console.log(arr); // Output: [1, 2, 10, 4, 5]
//Slice: Returns a shallow copy of a portion of an array
let newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 10]
//9. Sorting Arrays
//Sort: Sorts the elements of an array
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 4, 5, 10]
//Reverse: Reverses the order of the elements
arr.reverse();
console.log(arr); // Output: [10, 5, 4, 2, 1]
//10. Joining Arrays
//Concat: Merges two or more arrays
let arr2 = [6, 7, 8];
let merged = arr.concat(arr2);
console.log(merged); // Output: [10, 5, 4, 2, 1, 6, 7, 8]
//Join: Joins all elements of an array into a string
let str = arr.join('-');
console.log(str); // Output: "10-5-4-2-1"