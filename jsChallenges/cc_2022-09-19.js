function findNeedle(haystack) {
    // find the needle
    let index;
  for(let i=0; i<haystack.length; i++){
    if(haystack[i]=='needle'){
      index = i;
      break;
    }
  }
    // return the index
  return `found the needle at position ${index}`
  }


  function countPositivesSumNegatives(input) {
    let posCount = 0;
    let negSum = 0;
    if(input == null){
      return[]
    }
    input.forEach(number=>
       number>0? posCount++
      : negSum+=number
      )
  if(posCount === 0 && negSum === 0){
    return [];
  }else
    return [posCount, negSum];
  }