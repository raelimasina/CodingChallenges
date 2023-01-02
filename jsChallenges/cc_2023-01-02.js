//6 kyu

function solution(number){
  let sum = 0;
  for(let num = number-1; num > 0; num--){
    if(num%3===0 || num%5===0){
      sum += num;
    }
  }
  return sum;
}
