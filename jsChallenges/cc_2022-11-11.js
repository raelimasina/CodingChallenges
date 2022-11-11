//LEETCODE ALGORITHMS DAY 2

//Problem 1
/**
 * @param {number[]} nums
 * @return {number[]} squared and sorted low to high
 */
var sortedSquares = function(nums) {
    return nums.map(num=>num*=num).sort((a,b)=>a-b);
};


//Problem 2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //Parameters [nums], k > 0
 //Returns 
 //Examples
 //Psuedo code
var rotate = function(nums, k) {
    //sort the array such that the index will increase k times
    //shift and pop k times
    for(let t = 1; t<= k; t++){
        const shiftedVal = nums[nums.length-1];
        nums.pop();
        nums.unshift(shiftedVal);
    }
};
//leet code may be having issues....it isn't accepting my solution even though it accepted others that were almost identical.
