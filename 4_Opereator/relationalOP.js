// RELATIONAL OPERATOR
// Object 
const emp ={
eid:101,
ename:"Asim",
sal:100000
};
console.log("all emp info=",emp);
// 1 Type for access object element 
console.log("particular info of emp id(ename)=",emp.ename);
// 2 Type of access element 
console.log("type 2",emp['ename']);
emp['company']="TCS";// add element in object 
console.log("After adding element in object ",emp);
// Note : We can Not create same name of object because dataType of object is constant.But we can Add more element  on those oject 