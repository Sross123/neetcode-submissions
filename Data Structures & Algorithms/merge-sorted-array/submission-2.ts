class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let first = m - 1;
        let last = n - 1;
        let k = m + n - 1;

        while(last >=0){
            if(first >= 0 && nums1[first] > nums2[last]){
                nums1[k] = nums1[first];
                first --;
            }else{
                nums1[k] = nums2[last];
                last --;
            }
            k --;
        }
    }
}
