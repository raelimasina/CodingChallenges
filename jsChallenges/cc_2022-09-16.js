String.prototype.toJadenCase = function () {
    //...
  
  let words = this.split(' ');
    let testArray = [];
    words.forEach(word=>{
      let modifiedWord = word.charAt(0).toUpperCase() + word.slice(1);
      testArray.push(modifiedWord);
   })
    let modifiedSentence = testArray.join(' ');
    return modifiedSentence;
    
  };