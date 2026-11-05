class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a,b)=> a-b);
        const result: number[][] = []

        for(let k = 0; k <=nums.length -1; k++){
            if(nums[k] > 0){
                break;
            }

            if(k === 0 || nums[k] !== nums[k - 1]){
                this.twoSum(nums, result, k)
            }
        }
        return result;

    }
    private twoSum(nums: number[], result: number[][], k: number){
        let first: number = k + 1;
        let last: number = nums.length - 1;

        while(first < last){
            let sum = nums[k] + nums[first] + nums[last];

            if(sum > 0){
                last --;
            }else if(sum < 0){
                first ++;
            }else{
                result.push([nums[k], nums[first], nums[last]])

                first ++;
                last --;

                while(first < last && nums[first] === nums[first - 1]){
                    first ++;
                 }

                while(first < last && nums[last] === nums[last + 1]){
                    last --;
                }
            }

        }
    }

}
