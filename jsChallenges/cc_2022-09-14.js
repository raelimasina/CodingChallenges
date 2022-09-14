function repeatStr (n, s) {
    let newStr = '';
    for(let i = 0; i < n ; i++){
       newStr += s;
    } 
    return newStr;
  }

//6kyu
  function arrayDiff(a, b) {
    //loop to go through array b
    for(let i = 0; i < b.length ; i++){
      //nested loop to go through array a for each iteration of b
      let j = 0;
      while(j < a.length){
        if (b[i] === a[j]){
          a.splice(j, 1);
          j--;
        }else{
          j++;
        }
      }
      }
    return a;
    }