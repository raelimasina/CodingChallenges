function highAndLow(numbers){
    // turn string into an array
    const splitArray = numbers.split(" ");
    // turn each element into a number
    let numberArray = splitArray.map(number=>Number(number));
    // sort from low to high
    numberArray.sort((a, b)=> a-b);
    // put the first and last element into a string and return
    return `${numberArray[numberArray.length-1]} ${numberArray[0]}`
  }


  function highAndLow(numbers){
    numbers = numbers.split(' ').map(number=>Number(number));
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }