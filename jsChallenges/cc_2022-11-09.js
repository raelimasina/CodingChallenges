/**
 * @param {string} s
 * @return {number}
 * given a string, return the length of the last word in the string
 */
var lengthOfLastWord = function(s) {
    const str = removeSpaces(s);
    const words = str.split(' ');
    return words[words.length-1].length;
};

var removeSpaces = function(t){
    let result = '';
    let prevChar = '';
    for(let i = 0; i<t.length; i++){
        const currentChar = t[i];   
        if(!(prevChar === ' ' && currentChar === prevChar)){
            result += currentChar;
        }
        prevChar = currentChar;
    }
    result = result.split('')
    if(result[0]=== ' '){
        result.shift();
    }
    if(result[result.length-1]===' '){
        result.pop();
    }
    result = result.join('')
    return result;
}
