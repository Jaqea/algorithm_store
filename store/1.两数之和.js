/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 写法一：
  // let map = new Map(),
  //   res = [];
  // nums.forEach((item, index) => {
  //   if (!map.has(item)) map.set(item, [index]);
  //   else map.get(item).push(index);
  // });
  // for (let item of nums) {
  //   const num = target - item;
  //   if (map.has(num)) {
  //     if (map.get(num)[0] !== map.get(item)[0]) {
  //       res = [map.get(item)[0], map.get(num)[0]];
  //       return res;
  //     }
  //     if (map.get(num)[0] === map.get(item)[0] && map.get(num).length > 1) {
  //       res = map.get(item);
  //       return res;
  //     }
  //   }
  // }
  // 写法二：
  // let map = new Map(),
  //   res = [];
  // nums.forEach((item, index) => map.set(item, index));
  // for (let [index, item] of nums.entries()) {
  //   const num = target - item;
  //   if (map.has(num)) {
  //     if (map.get(num) !== index) {
  //       res = [index, map.get(num)];
  //       return res;
  //     }
  //   }
  // }
  // 写法三：
  // let map = new Map(),
  //   res = [];
  // for (let [index, item] of nums.entries()) {
  //   const num = target - item;
  //   if (map.has(num)) {
  //     if (map.get(num) !== index) {
  //       res = [index, map.get(num)];
  //       return res;
  //     }
  //   } else map.set(item, index);
  // }

  const map = new Map();

  for (const [index, value] of nums.entries()) {
    const num = target - value;
    if (map.has(num)) {
      if (map.get(num) !== index) {
        return [index, map.get(num)];
      }
    } else {
      map.set(value, index);
    }
  }
};
// @lc code=end
