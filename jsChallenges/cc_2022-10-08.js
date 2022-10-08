function numberJoy(n) {
    n = n.toString()
    let nums = n.split('').map(num=>Number(num))
    let s = nums.reduce((acc, c)=>acc+c,0);
    let arrS = String(s).split("")
    let reverseS = arrS.reverse().join('');
    reverseS = Number(reverseS);
    n = Number(n)
    if(n%s===0 && s*reverseS==+n){
      return true;

    }else{
      return false;
    }
}