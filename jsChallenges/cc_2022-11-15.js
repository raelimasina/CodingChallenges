//ALGORITHMS DAY 4/14

//problem 1
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

//problem 2
/**
 * @param {string} s
 * reverse the order of characters in each word within sentence
 * @return {string}
 */
var reverseWords = function(s) {
   // const words = s.split(' ');
   // const rev = words.map(word=>(word.split('').reverse().join('')));
    //return rev.join(' ');
    return s.split(' ').map(word=>(word.split('').reverse().join(''))).join(' ');
};
