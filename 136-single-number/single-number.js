/**
 * @param {number[]} nums
 * @return {number}
 */

 function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
var singleNumber = function(nums) {
    let count={}
    for(let ele of nums){
        if(count.hasOwnProperty(ele)){
            count[ele]=count[ele]+1
        }else{
            count[ele]=1
        }
    }
    return Object.keys(count).find(key=>count[key]==1)
    
};