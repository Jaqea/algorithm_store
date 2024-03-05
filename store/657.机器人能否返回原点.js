/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let horizontal = (vertical = 0);

  [].slice.call(moves).forEach((item) => {
    switch (item) {
      case "L":
        horizontal--;
        break;
      case "R":
        horizontal++;
        break;
      case "U":
        vertical++;
        break;
      case "D":
        vertical--;
        break;
      default:
        break;
    }
  });

  return !horizontal && !vertical;
};
// @lc code=end
