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
  let len = (front = rear = 0);
  queue[rear++] = 1;
  len++;

  while (len !== n) {
    const ugly = queue[front++];
    for (let num of arr) {
      const temp = ugly * num;
      if (!queue.slice(front, rear).includes(temp)) {
        queue[rear++] = temp;
        console.log(temp);
        len++;
      }
    }
  }

  return len;
};
// @lc code=end
