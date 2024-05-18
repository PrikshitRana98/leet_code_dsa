class Solution {
    public int[] buildArray(int[] nums) {
        int [] arr= new int[nums.length];
        int i;
        for (i = 0; i < nums.length; i++) { 
  
            // accessing each element of array 
            arr[i]=nums[nums[i]];
            
        }
        return arr;
        
    }
}