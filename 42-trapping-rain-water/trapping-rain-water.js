/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<=0){
        return 0
    }
    let n=height.length
    let l=0
    let r=n-1

    let l_max=height[l];
    let r_max=height[r];

    let ans=0;

    while(l<r){
        if(height[l]<height[r]){
            l_max=Math.max(l_max,height[l])
            ans+=l_max-height[l]
            l++;
        }else{
            r_max=Math.max(r_max,height[r])
            ans+=r_max-height[r]
            r--;
        }
    }    
    return ans
};