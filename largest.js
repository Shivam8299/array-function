function largest (x,y){
    let count1=0;
    let count2=0;
    let i=x;
 for(let i=x; i>0; i-=Math.floor(y/10)){
    count1++;
}
 for(let j=y; j>0; j-=Math.floor(y/10)){
    count2++;
}
    if(count1>count2){
        console.log(x);
    }
    else {
        console.log(y);
    }

}
largest(12,123);
