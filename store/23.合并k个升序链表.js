/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const search = (queue, node) => {
  let low, high, mid;
  low = 0;
  high = queue.length;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (queue[mid].val > node.val) high = mid;
    else low = mid + 1;
  }
  return low;
};
var mergeKLists = function (lists) {
  let node,
    head = new ListNode(),
    p = head,
    priorityQueue = [];
  lists.forEach((item) => {
    if (item) priorityQueue.splice(search(priorityQueue, item), 0, item);
  });
  while (priorityQueue.length) {
    node = priorityQueue.shift();
    p.next = node;
    if (node && node.next) {
      node = node.next;
      priorityQueue.splice(search(priorityQueue, node), 0, node);
    }
    p = p.next;
  }
  p.next = null;
  return head.next;
};
// @lc code=end
