class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        
        const seen = new Map<string, number>()

        for(const char of s){
            seen.set(char, (seen.get(char) ?? 0) + 1)
        }

        for(const char of t){
            const currentCount = seen.get(char);
            if(!currentCount) return false;

            if(seen.has(char)){
                seen.set(char, (seen.get(char) ?? 0) - 1)
            }
        }
        return true;
    }
}
