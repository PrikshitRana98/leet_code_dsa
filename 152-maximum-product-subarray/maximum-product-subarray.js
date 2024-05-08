/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    /**
 * @param {number[]} nums
 * @return {number}
 */

   let left = nums[0] , right = nums[nums.length-1] , 
   leftProd = 1 , rightProd = 1 , n = nums.length;
        for(let i = 0 ; i < n ; i++){
            leftProd *= nums[i];
            rightProd *= nums[n - i - 1];

            if(leftProd > left) left = leftProd;

            if(rightProd > right) right = rightProd;

            if(!leftProd) leftProd = 1;

            if(!rightProd) rightProd = 1;
        }
        return Math.max(left,right);
};