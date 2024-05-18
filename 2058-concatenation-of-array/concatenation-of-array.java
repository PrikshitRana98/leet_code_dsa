class Solution {
    public int[] getConcatenation(int[] nums) {
        int len=nums.length*2;
        int [] returnArr= new int [len];

        System.arraycopy(nums, 0, returnArr, 0, nums.length);
        System.arraycopy(nums, 0, returnArr, nums.length,  nums.length); 

        return returnArr;

    }
}