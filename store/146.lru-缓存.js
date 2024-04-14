/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.vMap = new Map();
  this.queue = [];
  this.front = 0;
  this.rear = 0;
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.vMap.has(key)) return this.vMap.get(key);
  else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.capacity && !this.vMap.has(key)) {
    this.vMap.set(key, value);
    this.queue[this.rear++] = key;
    --this.capacity;
  } else if (!this.capacity) {
    const k = this.queue[this.front++];
    this.vMap.set(k, null);
    this.vMap.set(key, value);
    this.queue[this.rear++] = key;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
