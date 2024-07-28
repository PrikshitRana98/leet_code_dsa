/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length<=1){
        return true
    }

    let ns=s.replace(/[^a-z0-9]/ig,'').split(" ").join('').toLowerCase()
    console.log(ns)
    return ns==ns.split('').reverse().join('')
    
    
};