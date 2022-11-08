//Today I decided to solidify my understanding of OOP with several OOP coding challenges

//GRINCH STOLE CHRISTMAS
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


//FATPHOBIC PIRATES
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  
this.isWorthIt = function(){
    const crewDraft = this.crew*1.5;
    const loot = this.draft - crewDraft;
    if(loot > 20){
      return true;
    }else{
      return false;
    }
  }
}
