/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i, j;
  i = j = 0;
  while (i < name.length && j < typed.length) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else {
      if (j > 0 && typed[j] === typed[j - 1]) j++;
      else return false;
    }
  }
  if (i < name.length) return false;

  while (j < typed.length) {
    if (typed[j] === typed[j - 1]) j++;
    else return false;
  }
  return true;
};
// @lc code=end
