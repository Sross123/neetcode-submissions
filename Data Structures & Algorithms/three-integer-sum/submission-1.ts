class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b)=> a - b);
        const result: number[][] = []

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > 0){
                break;
            }

            if(i == 0 || nums[i] !== nums[i - 1]){
                this.twoSum(nums, i, result)
            }
        }
        return result;

    }
    private twoSum(nums:number[], i:number, res: number[][]): void{
        let left: number = i + 1;
        let right: number = nums.length - 1;

        while(left < right){
            let sum = nums[left] + nums[right] + nums[i];
            if(sum > 0){
                right --;
            }else if(sum < 0){
                left ++;
            }else{
                res.push([nums[left], nums[right], nums[i]]);
                left ++;
                right --;

                while(left < right && nums[left] === nums[left - 1]){
                    left ++;
                }

                while(left < right && nums[right] === nums[right + 1]){
                    right --;
                }
            }
        } 
    }
}
