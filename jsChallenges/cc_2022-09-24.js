//ABBREVIATE A TWO WORD NAME
function abbrevName(name){
    //turn the name into an array split by spaces
    const names = name.split(' ');
    let initials =[];
    //for each string, take the first letter and put it in a new array
    names.forEach(word=>{
      initials.push(word[0]) ;
    })
    //join the new array with '.'
    initials = initials.join ('.')
    //return the initials
    return initials;
  
  }