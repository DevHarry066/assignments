/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let value = false;
  str1 = str1.replace(/\s/g, '');
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str2 = str2.replace(/\s/g, '');
  if(str1.length === 0 && str2.length === 0) return true;
  if (str1.length === str2.length) {
    
    for (let i=0; i<str1.length; i++) {
      if(str1.indexOf(str2[i]) > -1) {
        value = true;
      } else {
        return false;
      }
    }
  } else {
    value = false;
  }
  return value;
}

module.exports = isAnagram;
