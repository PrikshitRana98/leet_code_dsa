/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) {
        return false; // If the lengths are different, they can't be anagrams
    }

    const charCount = {};

    // Count the frequencies of characters in string s
    for (let char of s) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Decrement the frequencies of characters in string t
    for (let char of t) {
        if (!charCount[char]) {
            return false; // If a character is not present in s, it's not an anagram
        } else {
            charCount[char]--;
        }
    }

    // Check if all frequencies are zero
    for (let count of Object.values(charCount)) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};