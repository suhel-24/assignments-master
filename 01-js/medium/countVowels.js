/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    a=['a', 'e', 'i', 'o', 'u']
    let str1=str.toLowerCase()
    let count=0
    for(let i=0;i<str.length;i++){
      if(a.includes(str1[i])){
        count=count+1
      }
    }
    return count
}

module.exports = countVowels;