//need to store original method in a variable so that it can be used
const originalDate = Date.prototype.getDate;


//then can modify the method
Date.prototype.getDate = function getGrinchDate() {
  //store the original date in a variable by calling the original method
  //and passing in 'this' as the parameter
  const date = originalDate.call(this);
  
  if(this.getMonth()===11 && date ===25){
    return 26;
  }else{
    return date;
  }
}
