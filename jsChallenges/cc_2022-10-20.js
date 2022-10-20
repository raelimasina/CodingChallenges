//UNSOLVED


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //convert list into array
    let l1R = Object.entries(l1);
    let l2R = Object.entries(l2);
    //reverse the arrays and store in variables
    //join the rays as numbers
    let l1Arr = Number(l1R.reverse().join());
    let l2Arr = Number(l2R.reverse().join());
    //add the numbers
    const sum = l1R + l2R;
    //split the sum into an array
    let sumArr = sum.split();
    //reverse the sum
    sumArr = sumArr.reverse();
    //convert array to list
    //let sumList = ListNode(sumArr, 0)->need to study more on lists and nodes
    //return list
    //return sumList;
};
