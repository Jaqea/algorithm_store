/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  const isPalindrome = (low, high) => {
    while (low <= high) {
      if (s[low] !== s[high]) return false;
      low++;
      high--;
    }

    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    } else {
      left++;
      right--;
    }
  }

  return true;
};
// @lc code=end
