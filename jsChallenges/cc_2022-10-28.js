//8 KYU Array 
function first(arr, n) {
  if(n == undefined || n ==null){
    n = 1;
  }
  return arr.slice(0, n);
}

function duckDuckGoose(players, goose) {
  if(goose%players.length===0){
    return players[players.length-1].name;
  }else{
    return players[(goose%players.length)-1].name;
  }
}



//7 KYU Array
function nthSmallest(arr, pos){
  const sorted = arr.sort((a,b)=>a-b);
  pos = Math.abs(pos);
  return sorted[pos-1];
}

function search(budget, prices) {
  let inBudget=[];
  for(let i = 0; i<prices.length; i++){
    if(prices[i]<= budget){
      inBudget.push(prices[i]);
    }
  }
// return array of prices that are within budget
  return inBudget.sort((a, b)=> a-b).join(',');
}




//6 KYU Array
function tribonacci(signature,n){
  let trib=[];
  if(trib.length == n){
    return trib;
  }else{
    trib = signature;
    if(n<=3){
      return trib.slice(0,n);
    }
    for(let i = 0; i< n-3; i++){
      trib.push(trib[i+2]+trib[i+1]+trib[i]);
    }
    return trib;
  }
}
