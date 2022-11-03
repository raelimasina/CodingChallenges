/*function michaelPays(costs) {
  let michaelPay = 0;
  let katePay = 0;
  if(costs < 5){
    michaelPay += costs;
  }else{
    katePay = costs * (1/3);
    if(katePay > 10){
      michaelPay = costs - 10;
    }else{
      michaelPay = costs - katePay;
    }
  }
  return Number(michaelPay.toFixed(2));
}*/

function michaelPays(costs){
  return Number((costs < 5 ? costs : costs*(1/3) > 10 ? costs-10 : costs - (costs*(1/3))).toFixed(2));
}
