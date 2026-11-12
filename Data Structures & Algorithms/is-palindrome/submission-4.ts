class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1

        function isAlphaNumeric(s: string): boolean{
            return (s >= "a" && s <= "z") ||
            (s >= "A" && s <= "Z") ||
            (s >= "0" && s <="9")
        }

        while(left < right){
            if(!isAlphaNumeric(s[left])){
                left ++;
                continue;
            }

            if(!isAlphaNumeric(s[right])){
                right --;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }

            left ++;
            right --;
        }
        return true;
    }
}
