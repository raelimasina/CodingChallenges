/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //s = 'IXVII' =47
    
    //verify that all are upper case
    s = s.toUpperCase();
    
    //turn into array
    let arr = s.split('');
    console.log(arr)
    // ['I', 'X', 'V', 'I', 'I']
    
    //create a new array where symbols are assigned corresponding values
    let valArr = arr.map(function(symbol){
        switch(symbol){
            case 'I':
                return 1;
                break;
            case 'V':
                return 5;
                break;
            case 'X':
                return 10;
                break;
            case 'L':
                return 50;
                break;
            case 'C':
                return 100;
                break;
            case 'D':
                return 500;
                break;
            case 'M':
                return 1000;
                break;
            default:
                return 0;
        }
    })
    console.log(valArr)
    //[1, 10, 5, 1, 1]
    
    //if valArr[i]<valArr[i+1], subtract
    //if valArr[i]>=valArr[i+1], add
    let sum = valArr[valArr.length-1];
    for(let i=valArr.length-1; i>0; i--){
        if(valArr[i]>valArr[i-1]){
            sum -= valArr[i-1];
        }else{
            sum += valArr[i-1];
        }
    }
    
    return sum;
};
