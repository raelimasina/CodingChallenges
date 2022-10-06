//return an array of words as a sentence
function smash (words) {
    return words.join(' '); 
 };

 //Croquet Club membership. Take an array [age, handicap] and return what their membership is.
 function openOrSenior(data){
    const memberships =[];
    data.forEach(pair =>{
      if(pair[0]>=55 && pair[1]>7){
        memberships.push('Senior');
      }else{
        memberships.push('Open');
      }
    })
    return memberships;
  }