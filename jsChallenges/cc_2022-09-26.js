function flyBy(lamps, drone){
    let endLamps = [];
    let onLamps = drone.search('T');
    let offLamps = lamps.length -(onLamps+1);
    for(let i = 0; i<=onLamps; i++){
       endLamps.push('o');
    }
    for(let j = 0; j<offLamps; j++){
      endLamps.push('x');
    }
    if(Number(onLamps) > lamps.length-1){
      endLamps.pop();
    }
    return endLamps.join('');
  }

  