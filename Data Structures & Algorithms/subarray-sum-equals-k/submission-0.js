class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
       const map = new Map();

        //initial base case
        map.set(0, 1);

        let count = 0;
        let sum = 0;

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            if(map.has(sum - k)){
                count += map.get(sum - k)
            }
            map.set(sum, (map.get(sum) || 0) + 1)
        } 
        return count;
    }
}
