class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let maxCount = 0;
        for(let num of nums){
            if(num === 1){
                count ++;
                maxCount = Math.max(maxCount, count)
            }else{
                count = 0;
            }
        }
        return maxCount;
    }
}
