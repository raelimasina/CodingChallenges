class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInt = args[0]
    for(let i=0; i<args.length; i++){
      if(args[i]<smallestInt){
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }
}
