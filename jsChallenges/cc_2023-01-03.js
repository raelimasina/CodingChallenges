function narcissistic(value) {
  // Code me to return true or false
  const valueArr = value.toString().split('');
  const digits = valueArr.map(num=>Number(num));
  const numOfDigits = digits.length;
  
  let sum = 0;
  digits.forEach(digit=>{
    sum+= Math.pow(digit, numOfDigits);
  });
  if (sum === value){
    return true;
  }else{
    return false;
  }
  
}
