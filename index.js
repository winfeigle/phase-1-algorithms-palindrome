function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('')
  return reversedWord === word ? true : false;
}

/* 
  Add your pseudocode here:
  1. Convert string to an array
  2. Reverse() the array
  3. Join the array into a string
  4. if reversed string matches original string, return true
*/

/*
  Add written explanation of your solution here
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
