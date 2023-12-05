/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 !== n2) {
      return false;
  }
  const strArr = str1.toLowerCase().split("");
    str2 = str2.toLowerCase();

    for (let i = 0; i < strArr.length; i++) {
        if (!str2.includes(strArr[i])) return false;
    }
  

  return true;
}

module.exports = isAnagram;
