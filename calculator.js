let input = require('readline-sync');
let firstNumber =input.question("enter the first number :- "); 
firstNumber = parseInt(firstNumber);
let operation = input.question("enter the operation :- "); 
let secondNumber =input.question("enter the second number :- "); 
secondNumber = parseInt(secondNumber);
if(operation== '+'){
    console.log(firstNumber + secondNumber);
}
else if(operation== '-'){
    console.log(firstNumber - secondNumber);
}
else if(operation=='*'){
    console.log(firstNumber * secondNumber);
}
else if(operation=='/'){
    console.log(firstNumber / secondNumber);
}
else{
    console.log(" sorry! unable to calculte ");
}