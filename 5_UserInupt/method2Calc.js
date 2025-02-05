const form=document.getElementById("clc_from")
const result=document.getElementById("result")
form.addEventListener("submit",function(event){
   event.preventDefault();
   const a=parseFloat(document.getElementById("num1").value)
   const b=parseFloat(document.getElementById("num2").value)
   let sum=a+b
   result.textContent="result:"+sum
})