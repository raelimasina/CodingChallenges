function duplicateEncode(word){
    const chars = word.toLowerCase().split('');
    const encodedChars = []; 
    chars.forEach((char, index)=>{
      if(chars.indexOf(char) !== index || chars.lastIndexOf(char) !== index){
        encodedChars.push(`)`);
      }else{
        encodedChars.push(`(`);
      }
    })
    return encodedChars.join('');
}
