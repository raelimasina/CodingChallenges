function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const sqrt = Math.sqrt(sq);
    //verify that sq is a perfect square
    if(Number.isInteger(sqrt)){
      //find the next perfect square
      return (sqrt+1)*(sqrt+1);
      
    }else{
    return -1;}
  }