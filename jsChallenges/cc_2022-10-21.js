//constraints
//1 <= nums.length <= 105
//-109 <= nums[i] <= 109
//0 <= k <= 105

/* tips from Nate
*Leave the loop as soon as it is true
*Loop only once
*trail behind
*
*this works, but not in cases like [1,0,1,1]
*need to find a way to include such cases
*/
function containsNearbyDuplicate(nums,k){
    if(1 > nums.length || nums.length > Math.pow(10,5)){
        return false;
    };
    if(k < 0 || k> Math.pow(10,5)){
        return false;
    };
    for(let i = 0; i<nums.length; i++){
        if(nums[i]< -Math.pow(10,9) || nums[i] > Math.pow(10,9)){
            return false;
            break;
        }else{
            let indexes = [];
            indexes = getAllIndexes(nums, nums[i]);
            if(indexes.length<=1){
                return false;
            }else{
                for(let j = 0; j<nums.length; j++){
                    if(j!==i && nums[j]===nums[i] && Math.abs(i-j)<=k){
                        return true;
                    };
                };
            };
        };         
    };
};





/**
 * 
 * Below worked, but then encountered runtime error
 * javascript heap out of memory
 */
var containsNearbyDuplicate6 = function(nums, k) {
    let check = [];
    //get all indexes of what is in each position.
    for(let i=nums.length-1; i>0; i--){
        let indexes = getAllIndexes2(nums, nums[i]);
        for(let j = indexes.length-1; j>0; j--){
            if(indexes[j]-indexes[j-1]<=k){
                check.push(true);
            }
        }
    }
    return check.length>0;
};
function getAllIndexes2(arr, val){
    const indexes=[];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            indexes.push(i);
        }   
    }
    return indexes;
}





/**
 * the following is my second attempt where I 
 * used indexes
 * Wrong answer
 */
var containsNearbyDuplicate5 = function(nums, k) {
    let check = [];
    //get all indexes of what is in each position.
    for(let i=nums.length-1; i>0; i--){
        let indexes =[];
        indexes = getAllIndexes1(nums, nums[i]);
        console.log(indexes)
        if(indexes.length >1 && Math.abs(indexes[0]-indexes[indexes.length-1])<=k){//!need to check distance of every duplicate
            check.push(true);
        }
    }
    return check.length>0;
};
function getAllIndexes1(arr, val){
    const indexes=[];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            indexes.push(i);
        }   
    }
    return indexes;
}




/**
 * the following is my first attempt where I 
 * used indexes so didn't have to run into nested loops making it run so many times.
 * Wrong answer
 */
var containsNearbyDuplicate4 = function(nums, k) {
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
 * below I added the constraints listed in the problem description to try and help reduce processing time
 * 
 * Time limit exceeded
 */
var containsNearbyDuplicate3 = function(nums, k) {
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
 * works, but...
 * 
 * Time limit exceeded
 */
var containsNearbyDuplicate2 = function(nums, k) {
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
 * first attempt at doing Contains Duplicates II leetcode problem
 * 
 * wrong answer
 */
var containsNearbyDuplicate1 = function(nums, k) {
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
    return check2;  
};
