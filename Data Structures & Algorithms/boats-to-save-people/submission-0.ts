class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people = people.sort((a, b)=> a - b);
        let left = 0;
        let right = people.length - 1;
        let boat = 0;

        while (left <= right) {
            let weight = people[left] + people[right];

            if (weight <= limit) {
                boat ++;
                left++;
                right--;
            } else {
                boat ++;
                right--;
            }
            
            
        }
        return boat;
    }
}
