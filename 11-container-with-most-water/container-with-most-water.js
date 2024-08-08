/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res=0
    let l=0; let r=height.length-1

    while(l<r){
        let water=Math.min(height[l],height[r])*(r-l)
        console.log(water)
        if(water>res){
            res=water
        }
        if(height[l]<height[r]){
            l++
        }else{
            r--
        }
        
    }
    

    return res
    
};