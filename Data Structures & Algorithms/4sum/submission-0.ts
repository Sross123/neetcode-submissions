class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums = nums.sort((a,b)=> a - b);
        let result: number[][] = []

        for(let i = 0; i < nums.length - 3; i++){

            if(i > 0 && nums[i] === nums[i - 1]){
                continue;
            }

            for(let j = i + 1; j < nums.length - 2; j++){
                if(j > i + 1 && nums[j] === nums[j - 1 ]){
                    continue;
                }

                this.twoSum(nums, result, i, j, target)
            }
        }

        return result;
    }

    private twoSum(nums: number[], result:number[][], i: number, j: number, target: number){
        let first: number = j + 1;
        let last: number = nums.length - 1;

        while(first < last){
            let sum = nums[i] + nums[j] + nums[first] + nums[last];

            if(sum < target){
                first ++;
            }else if(sum > target){
                last --;
            }else{
                result.push([nums[i], nums[j], nums[first], nums[last]]);

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
