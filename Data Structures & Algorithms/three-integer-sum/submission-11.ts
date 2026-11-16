class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => a - b);
        const res: number[][] = []
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            this.twoSum(nums, i, res)
        }
        return res;

    }
    private twoSum(nums: number[], i: number, res: number[][]): void {
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                res.push([nums[i], nums[left], nums[right]])
                left ++;
                right --;

                while(left < right && nums[left] === nums[left - 1]){
                    left ++;
                }
                while(left < right && nums[right] === nums[right + 1]){
                    right ++;
                }
            }
        }
    }

}
