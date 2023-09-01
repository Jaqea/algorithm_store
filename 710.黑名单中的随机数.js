/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.hash = new Map();
  this.sz = n - blacklist.length;
  blacklist.forEach((item) => this.hash.set(item, 1));
  let last = n - 1;
  blacklist.forEach((item) => {
    if (item >= this.sz) return;
    else {
      while (this.hash.has(last)) last--;
      this.hash.set(item, last);
      last--;
    }
  });
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const NUM = Math.floor(Math.random() * this.sz);
  if (this.hash.has(NUM)) return this.hash.get(NUM);
  return NUM;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
