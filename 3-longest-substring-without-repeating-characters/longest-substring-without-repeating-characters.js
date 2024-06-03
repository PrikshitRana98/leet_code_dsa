/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let maxLength = 0;
    let currentSubstring = "";
    
    for (let char of s) {
        if (currentSubstring.includes(char)) {
            // Remove characters from the start until the repeated character is removed
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
            
        }
        
        currentSubstring += char;
        
        
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    
    return maxLength;
};