function wordsToMarks(string){
    const letters =string.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let sum = 0;
    letters.forEach(letter=>{
      sum+= alphabet.indexOf(letter)+1;
    })
    return sum;
  }