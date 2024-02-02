// function passMessage() {
//     return "i am happy to leran JS"
// }
// let message = passMessage();
// console.log(message.toUpperCase());


//++++++++++++++++++++Sum of all parameters+++++++++++++++++++++++
// function sumOfAllParameters() {
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }
// const total = sumOfAllParameters(1,2,3,4,5,6,7,8,9,10);
// console.log(total);


//+++++++++++++++++Arrow function++++++++++
// const square = (x) => x**x;
// console.log(square(3))


//++++++++++ multiple line arrow function +++++++++++++++++
// const table = (x) => {
//     console.log(`the input is ${x}:`)
//     return x*x;
//     }
// console.log(table(4));


//++++++++++++++ immediatily invoked function +++++++++++++
// (function (a) {
//     console.log(`the output is ${a * a}`);
// }) (4)

// const sum = function (x,y){
//   return (x+y);
// }
// let total = sum;
// console.log(total(3,5))



// function input (){
//   let input = require('readline-sync');
// let name =input.question("enter your name :-")
// return name.trim()
// }
// function check (input){
//   if(input==="string" && input.trim() !== " "){
//     return input;
//   }
//   else {
//     console.log("given input is invalid ")
//   }
// }
// let userInput = input();
// let validInput = check (input);


//++++++++++++++++++function Expreaaion++++++++++++++++++

// const sum = function (x,y){
//     return x + y;
// }
// const result = sum(4,7); // x get the value 4+7=11
// console.log(result);


//+++++++++Arrow Function+++++++++++++++++
//it is one of the most used and efficient method to create function 
//in js it is compratively easy implementation. 

// const a= ["hydrogen","helium","lithium","Beryllium"];
// const a2 = a.map(function(s){
//     return s.length;
// });
// console.log ("normal way ", a2);


//++++++++++Arrow Function +++++++++++++

// const a3 = a.map((s) => s.length);
// console.log("Using the Arrow Function ", a3);

//+++++++++++++++++++++++++++++++++Prime No+++++++++++++++++++


// function primeNumber(){
//     let input = require('readline-sync');
//     let n = input.question("enter the n :-");
//     let i = 1;
//     while(i<=n){
//        let count = 0;
//         for(let j=1; j<=i/2; j++){
//             if(i%j==0){
//                 count ++;
//             }
//         }
//         if(count == 1){
//         console.log(i);
//         i++;
//         }
//         else{
//             i++;
//         }

//     }
// }
// console.log(primeNumber())

