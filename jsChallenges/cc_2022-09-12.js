function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let entries = classPoints.length;
    for (let i = 0; i < classPoints.length; i++){
      sum += classPoints[i];
    }
    let avg = sum / entries;
    if (yourPoints > avg){
      return true;
    }else{
      return false;
    }
  }