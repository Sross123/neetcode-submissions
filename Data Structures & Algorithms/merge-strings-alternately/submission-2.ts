class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let i = 0;
        let j = 0;
        let newString = ""

        while(i < word1.length || j < word2.length){
            if(i < word1.length){
                newString += word1[i];
                i++
            }

            if(j < word2.length){
                newString += word2[j];
                j++
            }
        }
        return newString;
    }
}
