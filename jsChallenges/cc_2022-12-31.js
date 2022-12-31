function findOutlier(integers){
  let numOdd = 0;
  let numEven = 0;
  let evenOrOdd = 'odd';
  let outlier;
  //find out if it is an even or odd array
  for(let i = 0; i < 3; i++){
    if (integers[i]%2 === 0){
      numEven += 1;
    }
    else{
      numOdd += 1;
    }
  }

  
  if(numEven > 1){
    evenOrOdd = 'even';
  }

  //find the outlier
  if(evenOrOdd === 'even'){
    for(let i = 0; i < integers.length; i++){
      if(integers[i]%2 !== 0){
        outlier = integers[i];
        break;
      }
    }
  }else if(evenOrOdd === 'odd'){
    for(let i = 0; i < integers.length; i++){
      if(integers[i]%2 == 0){
        outlier = integers[i];
        break;
      }
    }
  }
  return outlier;
}
