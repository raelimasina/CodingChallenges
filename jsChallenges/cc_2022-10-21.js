/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let check1=false;
    let check2=false;
    //nested loops checking that indeces i and j are ===
    for(let i = 0; i < nums.length; i ++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i]===nums[j]){
                check1 = true;
                //if true, check that abs(i-j)<=k
                if(check1===true && Math.abs(i-j)<=k){
                    check2 = true;
                }
                break;
            }
        }
    }
    return check2
    
};
