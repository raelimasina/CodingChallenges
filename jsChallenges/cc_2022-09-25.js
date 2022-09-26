function solution(str){
    // my solution
    // let arr = str.split('');
    // let revStr=[];
    // arr.forEach(letter=> revStr.unshift(letter))
    // return revStr.join('');

    //better solution
    return str.split('').reverse().join('');
  }