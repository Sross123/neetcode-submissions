class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        let slow = 1;
        let fast = 1;

        while (fast < nums.length) {
            if (nums[fast] !== nums[slow - 1]) {
                nums[slow] = nums[fast];
                slow++;
            }

            fast++;
        }

        return slow;
    }
}