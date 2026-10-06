class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let slow = 0;
        let fast = numbers.length - 1;

        while(slow < fast){
            let sum = numbers[slow] + numbers[fast];

            if(sum < target){
                slow ++;
            } else if(sum > target){
                fast --;
            }else{
                return [slow + 1, fast + 1]
            }
        }

        
    }
}
