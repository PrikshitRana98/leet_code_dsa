/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<=0){
        return 0
    }

    let left=[];
    let right=[];
    let l_max=0;
    let r_max=0 

    for(let i=0;i<=height.length-1;i++){
        l_max=Math.max(height[i],l_max)
        r_max=Math.max(height[height.length-1-i],r_max)
        left.push(l_max);
        right.unshift(r_max)
    }
    
    let res=0
    
    for(let i=0;i<=height.length-1;i++){
        
        res+=Math.min(left[i],right[i])-height[i]
    }
    
    return res
};