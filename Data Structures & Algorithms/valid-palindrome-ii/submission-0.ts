class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left  = 0;
        let right = s.length - 1;

        while(left < right){
            if(s[left] === s[right]){
                left ++;
                right --;
                continue;
            }

            return (
                this.isValidPalindrom(s, left+1, right) ||
                this.isValidPalindrom(s, left, right-1)
            )

        }
        return true;
    }

    private isValidPalindrom(s: string, left: number, right: number): boolean{
        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left ++;
            right --;
        }
        return true;
    }
}
