function getSum( a,b )
{
   if(a === b){
     return a;
   }else{
     let lowNum = a;
     let highNum = b;
     let sum = 0;
     if(a > b){
      highNum = a;
      lowNum = b;
     }
     for(let x = lowNum; x<= highNum; x++){
       sum += x;
     }
     return sum;
   }
}
