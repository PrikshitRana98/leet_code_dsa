/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0; // Initialize left pointer at the beginning of the array
    let right = height.length - 1; // Initialize right pointer at the end of the array
    let maxArea = 0; // Variable to store the maximum area

    // Iterate while left pointer is less than right pointer
    while (left < right) {
        // Calculate the current area
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;

        // Update the maximum area if the current area is greater
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line towards the center
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea; // Return the maximum area

    
};