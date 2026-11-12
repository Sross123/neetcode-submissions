class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1;

        while(left < right){
            if(s[left] !== s[right]){
                return this.isValidPalindrom(left +1, right, s) ||
                this.isValidPalindrom(left, right -1, s)
            }

            left ++;
            right --;
        }
        return true
    }

    isValidPalindrom(left: number, right: number, s: string){
        while(left < right){
            if(s[left] !== s[right]) return false
            left ++;
            right --;
        }
        return true;
    }
}
