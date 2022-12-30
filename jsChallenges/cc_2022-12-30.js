multiplicationTable = function(size) {
  const arrAcross = [];
  const arrDown = [];
  const multTable = [];
  
  for(let i = 0; i < size ; i++){
    arrAcross.push(i+1);
    arrDown.push(i+1);
  }
  
  arrAcross.forEach(num=>{
    let products = [];
    let product;
    for(let j = 0; j< arrDown.length; j++){
      product = num * arrDown[j];
      products.push(product);
    }
    multTable.push(products);
  });
  
  return multTable;
  
  //test cases:
  // size === 4 => [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
}
