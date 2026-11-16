class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums = nums.sort((a, b)=> a - b);
        const res: number[][] = [];
 
        for(let i = 0; i < nums.length - 1; i++){
            
            if(i > 0 && nums[i] === nums[ i - 1]) continue;

            for(let  j = i + 1; j < nums.length - 1; j++){
                
                if(j > i + 1 && nums[j] === nums[j - 1]) continue;

                let left = j + 1;
                let right = nums.length - 1;

                while(left < right){
                    let sum = nums[i] + nums[j] + nums[left] + nums[right];

                    if(sum > target){
                        right --;
                    }else if(sum < target){
                        left ++;
                    }else{
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
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
        return res;
    }
}
