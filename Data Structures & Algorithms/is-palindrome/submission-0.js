class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        let L = 0;
        let R = cleanStr.length - 1;

        while(L < R){
            if(cleanStr[L] !== cleanStr[R]){
                return false
            }
            L++;
            R--;
        }
        return true;
    }
}
