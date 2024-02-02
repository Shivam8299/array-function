let input = require('readline-sync');
let number = input.question("enter the  number :- ");
number = parseInt(number);
let i=1;
while(i<=number){
    let count = 0;
    for(let j=1; j<=i/2; j++){
        if(i%j==0){
            count+=1;
        }
    }
    if(count==1){
        console.log(i)
        i++;
    }
    else{
        i++;
    }
}