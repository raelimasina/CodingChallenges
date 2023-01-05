function deleteNth(arr,n){
  arr.forEach((num, index)=>{
    let amt = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i]===num){
        amt += 1;
        if(amt > n){
          arr.splice(i, 1);
          i -= 1;
        }
      }
    }
  });
  return arr;
}
