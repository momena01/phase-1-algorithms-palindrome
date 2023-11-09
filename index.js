function isPalindrome(word) {
    // Write your algorithm here
    let newWord = word.split('').reverse().join('');
    if (word == newWord) {
        return true;
    }
    else {
        return false;
    }
}
/* 
  Add your pseudocode here
  read word- reverce word as a new one - if newWord == word - return T - else - return F 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
    console.log("=>", isPalindrome("madam"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
    console.log("=>", isPalindrome("memo"));

}

module.exports = isPalindrome;
