// object- An object is a collection of key-value pairs, where the key are properties and values are corresponding data of the keys 
// declaration of the object 
// Type 1
let obj1={
    name:"abc",
    age:25,
    job:"developer",
};
console.log("obj1 =",obj1);

// type 2
let obj2=new Object();
obj2.name="xyz";
(obj2.age=25),(obj2.job="developer");
console.log("obj2=",obj2);


// accessing value from the object by using keys
//type1
console.log("obj2 Name=",obj2.name);
// type2
console.log("obj1 Name=",obj1["name"]);

// modifying properties 
obj2.age =30;
console.log("obj2 age=",obj2["age"]);

//add key and value in object2
obj2.salary=15000;
console.log("obj2 = ",obj2);


// Delete key and value from the obect 2
delete obj2.name;
console.log("after deleting name from  object2 then obj2 =",obj2);


//checking if properties (means check the element is present or not in the object )
//type 1
console.log("in=","age" in obj2);
// type 2
console.log("by using (hasOwnProperty)=",obj2.hasOwnProperty("age"));

// iterating over object 
//using for in
for(key in obj2){
    console.log("key=",key, " ","val=",obj2[key]);
}

// property extraction
console.log("Object.keys=", Object.keys(obj1));
console.log("Object.values=", Object.values(obj1));
console.log("Object.entries=", Object.entries(obj1));

Object.keys(obj1).forEach((key)=>{
    console.log("key=",key,"value=",obj1[key])
});


//Mearging of the object (concatination of the objects )
let product1 = { name: "pineapple" };
let product2 = { wt: 300 };
let product3={...product1,...product2};
console.log("product3 =",product3);


// Find the length of the object 
// it use for checking how many element present in the object 
console.log("lenght of the object =",Object.keys(product3).length);


// Find the value by using this keyword 
//object method 
let product4={
    name:"cherry",
    wt:"500gm",
    display:function(){
        console.log("name:",this.name,"weight=",this.wt);
    },
};
product4.display();

// calsses and object in javaScript

class employee{
    id;
    name;
    job;
    salary;
    accept(id,name,job,salary){
    this.id=id;
    this.name=name;
    this.job=job;
    this.salary=salary;
    }
    display(){
        console.log("Employee id =",this.id);
        console.log("Employee name =",this.name);
        console.log("Employee job =",this.job);
        console.log("Employee salary =",this.salary)
    }
}
let employee1=new employee();
employee1.accept(1,"abc","Developer",150000);
employee1.display();



