class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left = 0;
        let  right = s.length -1;

        while(left < right){

            if(!this.isValidAlphaNumaric(s[left])){
                left ++;
                continue;
            }

            if(!this.isValidAlphaNumaric(s[right])){
                right --;
                continue;
            }


            if((s[left].toLowerCase()) === s[right].toLowerCase()){
                left ++;
                right --;
                continue;
            }

            return (
                this.isValidPalindrom(s.toLowerCase(), left + 1, right) ||
                this.isValidPalindrom(s.toLowerCase(), left, right - 1)
            )
        }        
        return true;
    }

    private isValidPalindrom(s: string, left: number, right: number): boolean{
        while(left < right){

            if (!this.isValidAlphaNumaric(s[left])) {
            left++;
            continue;
        }

        if (!this.isValidAlphaNumaric(s[right])) {
            right--;
            continue;
        }

            if(s[left] !== s[right]){
                return false;
            }
            left ++;
            right --;
        }
        return true;
    }

    private isValidAlphaNumaric(s: string):boolean{
            return(
                (s >= 'a' && s<= 'z')||
                (s >= 'A' && s <= 'Z')||
                (s >= '0' && s <= '9')
            )
        }

}
