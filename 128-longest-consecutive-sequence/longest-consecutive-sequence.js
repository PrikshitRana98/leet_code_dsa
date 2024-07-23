/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let arr= nums.sort((a,b)=>a-b) 

    arr=[...new Set(arr)]


let ans=arr.length>0?1:0
let count=1
for(let i=1;i<arr.length;i++){
     
    if(arr[i]==arr[i-1]+1){
        count++
    }else{
        count=1
    }
    
    ans=Math.max(ans,count)
}

return ans
    
};