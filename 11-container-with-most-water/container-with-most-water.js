/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res=0
    let l=0; let r=height.length-1

    while(l<r){
        let water=height[l]>height[r]?height[r]*(r-l):height[l]*(r-l)
        
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