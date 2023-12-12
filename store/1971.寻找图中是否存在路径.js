/*
 * @lc app=leetcode.cn id=1971 lang=javascript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
let father;

const find = (item) => {
  return father[item] === item ? item : (father[item] = find(father[item]));
};

const isSame = (u, v) => {
  u = find(u);
  v = find(v);
  return u === v ? true : false;
};

const join = (u, v) => {
  u = find(u);
  v = find(v);
  if (u === v) return;
  father[v] = u;
};

const init = (n) => {
  for (let i = 0; i < n; i++) father[i] = i;
};

var validPath = function (n, edges, source, destination) {
  father = new Array(n).fill(-1);
  init(n);
  edges.forEach((item) => {
    join(item[0], item[1]);
  });
  return isSame(source, destination);
};
// @lc code=end
