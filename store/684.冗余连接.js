/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
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
  const path = [u, v];
  u = find(u);
  v = find(v);
  if (u === v) {
    res = path;
    return;
  }
  father[v] = u;
};

var findRedundantConnection = function (edges) {
  // const N = edges.length,
  //   M = edges[0].length;
  // father = new Array(N + 1).fill(-1);
  // res = [];
  // init(N);
  // for (let i = 0; i < N; i++) {
  //   join(edges[i][0], edges[i][1]);
  // }
  // return res;

  const father = new Array(edges.length);
  let res;

  for (let i = 0; i < father.length; i++) father[i] = i;

  const find = (u) => {
    return father[u] === u ? u : (father[u] = find(father[u]));
  };

  const isSame = (u, v) => {
    u = find(u);
    v = find(v);

    return u === v;
  };

  const join = (u, v) => {
    u = find(u);
    v = find(v);

    if (u === v) return 1;

    father[v] = u;
  };

  for (let i = 0; i < edges.length; i++) {
    if (join(edges[i][0], edges[i][1])) res = i;
  }

  return edges[res];
};
// @lc code=end
