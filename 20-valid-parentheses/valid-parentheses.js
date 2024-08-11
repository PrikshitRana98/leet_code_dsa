function isValid(s) {
    // Initialize an empty stack
    let stack = [];
    
    // Create a mapping of closing to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate over the characters in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top of the stack or use a dummy value if the stack is empty
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the popped element doesn't match the corresponding opening bracket, return false
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched properly
    return stack.length === 0;
}

