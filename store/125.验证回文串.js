/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();

  const isStrNum = (str) => {
    return (str >= "a" && str <= "z") || (str >= "0" && str <= "9");
  };

  for (let left = 0, right = s.length - 1; left <= right; left++, right--) {
    while (!isStrNum(s[left])) left++;
    while (!isStrNum(s[right])) right--;

    console.log(left, right);
    if (s[left] !== s[right]) return false;
  }

  return true;
};
// @lc code=end
