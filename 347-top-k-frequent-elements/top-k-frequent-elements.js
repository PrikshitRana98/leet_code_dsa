/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj={}
     nums=nums.sort()
    for (let i of nums ){
       
        if(obj[i]){
            obj[i]=obj[i]+1
        }else{
            obj[i]=1
        }
    }
    // console.log(obj)
   let entries=Object.entries(obj)
    entries.sort(([, valueA], [, valueB]) => valueB - valueA);
    console.log(obj,entries)
    return entries.slice(0,k).map(a=> a[0])

};