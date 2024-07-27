/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (a) {
    // let elemntInd = 0
    // let res = []
    // while (elemntInd < a.length) {
    //     let prod = a.reduce((acc, val, i) => {
    //         return i !== elemntInd ? acc * val : acc;
    //     }, 1)
    //     console.log(elemntInd, prod)
    //     res.push(prod)
    //     elemntInd++
    // }
    // return res
    let nums=a

    const length = nums.length;
    const answer = new Array(length);

    // Initialize the answer array with 1 for the first pass
    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    // R will hold the suffix product
    let R = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i];
    }

    return answer;

};