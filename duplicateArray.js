// const duplicate = [1,2,3,4,2,5,6,3,7,8,9,1];
// let updateArray =[];
// for(let i=0; i<duplicate.length; i++){
//     let count = 0;
//         for(let j=i+1; j<duplicate.length; j++){
//         if(duplicate[i] == duplicate[j]){
//             count++;
//         }
//     }
//     if(count == 0){
//         updateArray.push(duplicate[i]);
//     }
// }
// console.log(updateArray);

//+++++++++++++ second method of delete duplicates from array++++++++++++


// const duplicate = [1,2,3,4,2,5,6,3,7,8,9,1];
// duplicate.sort();
// let newArray=[];
// for(let i=0; i<duplicate.length; i++){
//     if(duplicate[i]!=duplicate[i+1]){
//        newArray.push(duplicate[i]);
//     }
// }
// console.log(newArray);
// console.log(newArray.length);
