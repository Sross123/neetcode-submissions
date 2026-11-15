class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1;

        while(left < right){
            if(!this.isAlphanumeric(s[left])){
                left ++;
                continue;
            }

            if(!this.isAlphanumeric(s[right])){
                right --;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }

            left ++;
            right --;
        }
        return true

    }

    isAlphanumeric(s: string){
        return (s >= "a" && s <= "z") ||
        (s >= "A" && s <= "Z") ||
        (s >= "0" && s <= "9")
    }
}
