//UNSOLVED. Need to find out how to take things out of an array and not iterate over duplicates.
function order(words){
   // split words into an array
  words = words.split(' ');
  //check to see what number is included
  for(let i = words.length - 1 ; i>= 0; i--){
    //check to see what number is included
    let current = words[i];
    if(words[i].includes('1')){
      words.splice(i, 1);
      words.splice(0, 0, current); 
    }else if(words[i].includes('2')){
      words.splice(i, 1);
      words.splice(1, 0, current); 
    }else if(words[i].includes('3')){
      words.splice(i, 1);
      words.splice(2, 0, current); 
    }else if(words[i].includes('4')){
      words.splice(i, 1);
      words.splice(3, 0, current); 
    }else if(words[i].includes('5')){
      words.splice(i, 1);
      words.splice(4, 0, current); 
    }else if(words[i].includes('6')){
      words.splice(i, 1);
      words.splice(5, 0, current); 
    }else if(words[i].includes('7')){
      words.splice(i, 1);
      words.splice(6, 0, current); 
    }else if(words[i].includes('8')){
      words.splice(i, 1);
      words.splice(7, 0, current); 
    }else{
      words.splice(i, 1);
      words.splice(8, 0, current); 
    }
    
  }
  //return a string of them ordered
  return words.join(' ');
}

