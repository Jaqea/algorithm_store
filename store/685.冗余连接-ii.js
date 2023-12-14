/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */

let father, res;

const init = (n) => {
  for (let i = 1; i < n + 1; i++) father[i] = i;
};

const find = (item) => {
  return father[item] === item ? item : (father[item] = find(father[item]));
};

const isSame = (u, v) => {
  u = find(u);
  v = find(v);
  return u === v;
};

const join = (u, v) => {
  item = [u, v];
  u = find(u);
  v = find(v);
  if (u === v) {
    res = item;
    return;
  }
  father[v] = u;
};

var findRedundantDirectedConnection = function (edges) {
  const M = edges.length;
  father = new Array(M + 1).fill(-1);
  init();
  for (let i = 0; i < M; i++) join(edges[i][0], edges[i][1]);

  return res;
};
// @lc code=end
