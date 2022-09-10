function disemvowel(str) {
    //split the string into an array so that each character can be targeted
   const myArray = str.split('');
    //loop through the array to check each element
    let i =0;
    while(i<myArray.length){
      //if it is a vowel, remove it from the array
      if (myArray[i]==='a' || myArray[i]==='e'|| myArray[i]==='i'|| myArray[i]==='o' || myArray[i]==='u'|| myArray[i]==='A' || myArray[i]==='E'|| myArray[i]==='I'|| myArray[i]==='O' || myArray[i]==='U'){
        myArray.splice(i,1);
        //decrement if it is true since an element is being removed so the array indeces will change.
        i--;
      }else
        //otherwise, move onto the next element
        i++;
    }
    //instead of using .toString() which will place commas in between each letter, .join() will let me specify which character to place between each element.
    //turn the array back into a string
    str = myArray.join('');
    return str;
  }