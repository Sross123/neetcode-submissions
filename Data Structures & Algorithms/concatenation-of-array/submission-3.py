from typing import List

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        list2 = nums.copy()

        for x in list2:
            nums.append(x)
            print()
        return nums

sol = Solution()
print(sol.getConcatenation([1, 4, 1, 2]))