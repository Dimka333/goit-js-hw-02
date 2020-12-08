"use strict"

const findLongestWord = function (string) {
    let wordsArray = string.split(' ');
    let biggestWord = '';
    for (let i = 0; i < wordsArray.length; i++) {
        if (biggestWord.length <= wordsArray[i].length) {
            biggestWord = wordsArray[i];
    
        }
    
    }
    return biggestWord;

};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 