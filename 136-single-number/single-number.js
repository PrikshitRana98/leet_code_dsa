/**
 * @param {number[]} nums
 * @return {number}
 */
 
 
var singleNumber = function(nums) {
    let newObj= nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(newObj).find(key=>newObj[key]==1)
};