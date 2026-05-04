class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const ans = new Set();
        const set = new Set(nums1);

        for(let num of nums2){
            if(set.has(num)){
                set.add(num)
            }
        }
        return Array.from(ans)
    }
}
