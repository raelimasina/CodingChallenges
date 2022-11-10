//LEETCODE ALGORITHM PRACTICE DAY 1/14

//Problem 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * given an array return the index of target
 */
var search = function(nums, target) {
   return nums.indexOf(target);
};


//Problem 2
//given n, a number of versions, and an api isBadVersion(), return the version number of the first bad version.
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let firstBad;
        for(let v = n; v > 0; v--){
            if(isBadVersion(v)&& !(isBadVersion(v-1))){
                firstBad = v;
                break;
            }
        }
        return firstBad;
    };
};


//Problem 3
/* Given a sorted array of distinct integers and a target value, 
* return the index if the target is found. If not, return the index 
* where it would be if it were inserted in order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>=0){
        return nums.indexOf(target);
    }else{
        if( target < nums [0]){
            return 0;
        }else if (target > nums[nums.length-1]){
            return nums.length;
        }else{
          //need to account for arrays that are only the length of 2.
            if(nums.length > 2){
                for(let i = 0; i < nums.length - 1; i++){
                    if(target > nums[i] && target < nums[i+1]){
                        nums.splice(i+1, 0, target);
                        break;
                    }
                }
                return nums.indexOf(target);
            }else{
                return 1;
            }
            
        }
    }
};
