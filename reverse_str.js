function reverseStr (str) {
   let resevered = '';
   for(let i=str.length; i>=0; i--){
    resevered +=str[i];
   }
   return resevered;
}

let resevered = reverseStr ("I am Shivam");
console.log(resevered);