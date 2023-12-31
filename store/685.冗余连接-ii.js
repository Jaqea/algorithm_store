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

let father, res, M;

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
  u = find(u);
  v = find(v);
  if (u === v) return;
  father[v] = u;
};

const isTreeAfterRemoveEdge = (edges, deleteEdge) => {
  init(M);
  for (let i = 0; i < M; i++) {
    if (i === deleteEdge) continue;
    if (isSame(edges[i][0], edges[i][1])) {
      return false;
    }
    join(edges[i][0], edges[i][1]);
  }
  return true;
};

const getRemoveEdge = (edges) => {
  init(M);
  for (let i = 0; i < M; i++) {
    if (isSame(edges[i][0], edges[i][1])) {
      return edges[i];
    }
    join(edges[i][0], edges[i][1]);
  }
  return [];
};

var findRedundantDirectedConnection = function (edges) {
  M = edges.length;
  father = new Array(M + 1).fill(-1);
  res = [];
  const inDegree = new Array(M + 1).fill(0);
  edges.forEach((item) => {
    inDegree[item[1]]++;
  });

  inDegree.forEach((item, index) => {
    if (item === 2) {
      for (let i = M - 1; i >= 0; i--) {
        if (edges[i][1] === index) {
          res.push(i);
        }
      }
    }
  });

  if (res.length > 1) {
    if (isTreeAfterRemoveEdge(edges, res[0])) return edges[res[0]];
    else return edges[res[1]];
  }

  return getRemoveEdge(edges);
};
// @lc code=end
