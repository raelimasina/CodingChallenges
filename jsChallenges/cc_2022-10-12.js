function pigIt(str){
  str = str.split(' ');
  const pigLatin = str.map((word)=>{
    if( (word=== '!' || word === '.' || word=== '?')){
      return word;
    }else{
      const firstLetter = word[0];
      const letters = word.split('');
      letters.shift();
      letters.push(firstLetter + 'ay');
      word = letters.join('');
      return word;
      
    }
    
   
  })
  return pigLatin.join(' ');
}
