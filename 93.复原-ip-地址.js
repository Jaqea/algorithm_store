/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [],
    item = [];
  const backtracking = (s, start) => {
    if (start >= s.length && item.length === 4) {
      res.push(item.join("."));
      return;
    }

    for (let i = start + 1; i < s.length + 1; i++) {
      let ipItem = s.slice(start, i);
      if (ipItem[0] != 0 || (ipItem == 0 && ipItem.length == 1)) {
        ipItem -= "0";
        if (ipItem >= 0 && ipItem <= 255) {
          item.push(ipItem);
          backtracking(s, i);
          item.pop();
        }
      }
    }
  };
  backtracking(s, 0);
  return res;
};
// @lc code=end
