
function isPalindrome(word) {
  const cleanedWord = word.toLowerCase();
  const reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
}


/* 
  Add your pseudocode here
  word === abba,racecar,a: // true
  word === robot, ab : //false
  cleanedWord to lowercase
  cleanedWord split into characters ,reverse using .reverse then join 
  using .join() to check if a word is a palindrome
  cleanedWord === reveresedWord if it is a palindrome it will output true and output 
  false if not
*/

/*
  Add written explanation of your solution here
  The code will use methods such as .split to break the word into single characters,
  .reverse() will change the order of the characters to start from the last character,
  then join() will put the characters together as a single string
  -The last line will check if after splitting the word,will it be the same.If it is the output will be true,
  and if not false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
