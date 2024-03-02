/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let map;

const compare = (str1, str2) => {
  let num = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] === str2[i]) num++;
  }

  return str1.length - num === 1;
};

const findPath = (str, wordList) => {
  const path = [];
  for (let i of wordList) {
    if (compare(str, i) && !map.has(i)) {
      path.push(i);
    }
  }
  return path;
};

const bfs = (beginWord, endWord, wordList) => {
  const queue = [];
  let front = (rear = 0),
    path = 1;
  queue[rear++] = beginWord;
  while (front !== rear) {
    const item = queue[front++];
    if (!map.has(item)) map.set(item, path);
    const paths = findPath(item, wordList);
    for (let i of paths) {
      map.set(i, map.get(item) + 1);
      queue[rear++] = i;
    }
  }
};

var ladderLength = function (beginWord, endWord, wordList) {
  // map = new Map();
  // bfs(beginWord, endWord, wordList);
  // return map.has(endWord) ? map.get(endWord) : 0;

  const map = new Map();
  let node,
    len = 1;

  const compare = (str1, str2) => {
    let dif = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) dif++;
    }

    return dif === 1;
  };

  const findPath = (str) => {
    const path = [];
    wordList.forEach((item) => {
      if (compare(str, item) && !map.has(item)) path.push(item);
    });

    return path;
  };

  const bfs = (str) => {
    const queue = [];
    let last = (front = rear = 0);

    queue[rear++] = str;
    last = rear;
    while (front !== rear) {
      node = queue[front++];
      if (node === endWord) break;
      const nodes = findPath(node);
      if (nodes.length) {
        for (let n of nodes) {
          if (!map.has(n)) map.set(n, 1);
          queue[rear++] = n;
        }
      }
      if (front === last) {
        len++;
        last = rear;
      }
    }
  };

  bfs(beginWord);

  return node === endWord ? len : 0;
};
// @lc code=end
