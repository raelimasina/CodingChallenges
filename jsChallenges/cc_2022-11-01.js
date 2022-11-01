function presses(phrase) {
  //put values of each key into their own arrays
  const key1 = ['1'];
  const key2 = ['a', 'b', 'c', '2'];
  const key3 = ['d', 'e', 'f', '3'];
  const key4 = ['g', 'h', 'i', '4'];
  const key5 = ['j', 'k', 'l', '5'];
  const key6 = ['m', 'n', 'o', '6'];
  const key7 = ['p', 'q', 'r', 's', '7'];
  const key8 = ['t', 'u', 'v', '8'];
  const key9 = ['w', 'x', 'y', 'z', '9'];
  const key10 = ['*'];
  const key11 = [' ', '0'];
  const key12 = ['#'];
  // put all keys into a keys array
  const keys = [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12]
  //make sure that everything is lowercase
  phrase = phrase.toLowerCase().split('');
  //initialize variable for press count
  let presses = 0;
  //for each 'letter' in the phrase
  let letters = phrase.forEach(letter=>{
    //iterate through keys
    for(let i = 0; i< keys.length; i++){
      //if the letter exists within that key
      if (keys[i].indexOf(letter)>=0){
        //add the index of that letter plus one to presses
        presses += keys[i].indexOf(letter)+1;
      }
    }
  })
  return presses;
