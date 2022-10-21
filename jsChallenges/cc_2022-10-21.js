/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let check = [];
    //get all indexes of what is in each position.
    for(let i=nums.length-1; i>0; i--){
        let indexes = getAllIndexes(nums, nums[i]);
        console.log(indexes)
        if(indexes.length >1 && Math.abs(indexes[1]-indexes[indexes.length-1])<=k){
            check.push(true);
        }
    }
    return check.length>0;
};
function getAllIndexes(arr, val){
    const indexes=[];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            indexes.push(i);
        }
        
    }
    return indexes;
}




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let check = false;
    //get all indexes of what is in each position.
    for(let i=nums.length-1; i>0; i--){
        let indexes = getAllIndexes(nums, nums[i]);
        console.log(indexes)
        if(indexes.length===2 && Math.abs(indexes[1]-indexes[0])<=k){
            check = true;
        }
    }
    return check;
};
function getAllIndexes(arr, val){
    const indexes=[];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            indexes.push(i);
        }
        
    }
    return indexes;
}



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let check=false;
    if(1<=nums.length && nums.length <= Math.pow(10,5)){
        for(let i=0; i<nums.length; i++){
            if(-Math.abs(Math.pow(10,9)) <= nums[i] && nums[i]<= Math.pow(10,9)){
                for(let j=0; j<nums.length; j++){
                    if(j!==i && nums[i]===nums[j] && 0<=k && k<=Math.pow(10,5) && Math.abs(i-j)<=k){
                        check = true;
                    };
                };
            };
        }; 
    };
    
    return check;
};




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let check=false;
    //nested loops checking that indeces i and j are ===
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(j!==i && nums[i]===nums[j] && Math.abs(i-j)<=k){
                    check = true;
            }
        }
    }
    return check;
};





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
