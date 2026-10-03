class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if(!s){
            return false;
        }

        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(!this.isAlphaNumeric(s[left])){
                left ++;
                continue;
            }

            if(!this.isAlphaNumeric(s[right])){
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
    private isAlphaNumeric(s: string): boolean {
    return (s >= "a" && s <= "z") ||
           (s >= "A" && s <= "Z") ||
           (s >= "0" && s <= "9");
}
}