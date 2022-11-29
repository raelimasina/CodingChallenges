function splitTheBill(x) {
  let total = 0;
  const numKeys = Object.keys(x).length;
  Object.values(x).forEach(value=> total += value);
  const avg = total/numKeys;
  const diff = Object.values(x).map(value=> value - avg );
  console.log(diff);
  let obj = Object.entries(x);
  for(let i = 0; i < diff.length; i++){
    for(let j = 0; j< obj.length; j++){
      obj[j][1] = diff[i];
    }
  }
  console.log(obj)
  const split =  Object.fromEntries(obj)
  console.log(split)
  return split;
  
}
