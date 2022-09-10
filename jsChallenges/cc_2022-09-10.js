function filter_list(l) {
    // Return a new array with the strings filtered out
    let i = 0;
    let string = '';
    while( i < l.length){
      const item = l[i];
      if (typeof item === 'string'){
        l.splice(i, 1);
        i--;
      }else{
        i++;
      }
    }
    return l;
  }