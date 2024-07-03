/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // let i,
  //   j,
  //   windo = new Map(),
  //   need = new Map(),
  //   num,
  //   res = [];
  // i = j = num = 0;

  // Array.prototype.forEach.call(p, (item) => {
  //   if (need.has(item)) need.set(item, need.get(item) + 1);
  //   else need.set(item, 1);
  // });

  // while (j < s.length) {
  //   if (need.has(s[j])) {
  //     if (windo.has(s[j])) windo.set(s[j], windo.get(s[j]) + 1);
  //     else windo.set(s[j], 1);
  //     if (windo.get(s[j]) === need.get(s[j])) num++;
  //   }
  //   while (j - i + 1 >= p.length) {
  //     if (num === need.size) res.push(i);
  //     if (need.has(s[i])) {
  //       if (windo.get(s[i]) === need.get(s[i])) num--;
  //       windo.set(s[i], windo.get(s[i]) - 1);
  //     }
  //     i++;
  //   }
  //   j++;
  // }
  // return res;


  
};
// @lc code=end
