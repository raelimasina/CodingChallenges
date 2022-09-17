function getCount(str) {
    const characters = str.split('');
    let count = 0;
    characters.forEach(letter =>{
      if(letter=='a'|| letter=='e'|| letter=='i'|| letter=='o' ||letter == 'u'){
        count++;
      }
    })
    return count;
  }