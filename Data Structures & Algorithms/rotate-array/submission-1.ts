class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        const n = nums.length;
        k = k%n;

        this.reverseArray(nums, 0, n - 1);
        this.reverseArray(nums, 0, k - 1);
        this.reverseArray(nums, k, n - 1);

    }

    private reverseArray(nums: number[], left: number, right: number): void{
        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left ++;
            right --;
        }
    }
}
