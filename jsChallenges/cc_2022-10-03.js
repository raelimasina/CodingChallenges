function reverseWords(str) {
    let words = str.split(' ');
    words = words.map(word=>word.split('').reverse().join(''));
    return words.join(' ')
  }