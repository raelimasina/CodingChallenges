//ALGORITHMS DAY 3/14

//problem 1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * move all 0s to the end of an array while maintaining the relative order of
 * the non-0 elements
 *
 * [0,1,4,0,7,34] => [1,4,7,34,0,0]
 */
var moveZeroes = function(nums) {
    let zeroes = 0;
    //remove 0s from array and count them
    //for loop- splice if 0- read array r to l
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i]===0){
            zeroes+=1;
            nums.splice(i,1);
        }
    }
    //put 0s at the end of the array
    for(let j = 0; j<zeroes; j++){
        nums.push(0);
    }
};


//problem 2
/**
 * @param {number[]} 1-indexed array numbers sorted low to high
 * @param {number} target number to find numbers that add to
 * @return {number[]} the indeces of the two nums, added by one as
 * int arr of len 2. exactly 1 sol.
 * ([1, 3, 4, 7], 10) =>[2, 4]
 */
var twoSum = function(numbers, target) {
    let keepGoing = true;
    let indeces = [];
    let i = 0;
    //nested while loops
    while(i<numbers.length && keepGoing){
      //have j coming from the opposite direction
        let j = numbers.length-1;
        while(i < j){
             if(numbers[i]+numbers[j]===target && i < j){
                indeces = [(i+1), (j+1)];
                keepGoing = false;
                break;           
            }
            j--;
        }
        i++;
    }
 
    return indeces;
};
