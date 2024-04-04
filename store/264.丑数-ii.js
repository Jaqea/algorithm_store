/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const queue = [],
    arr = [2, 3, 5];
  let front = (rear = 0);
  queue[rear++] = 1;

  for (let i = 0; i < n; i++) {
    const ugly = queue[front++];
    for (let num of arr) {
      const temp = ugly * num;
      if (!queue.includes(temp)) {
        queue[rear++] = temp;
        queue.sort((a, b) => a - b);
      }
    }
  }

  return queue[n - 1];
};
// @lc code=end
