class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let n = nums.length;

        for(let i = 0; i < n; i++){
            nums[n + i] = nums[i];
        }
        return nums
    }
}
