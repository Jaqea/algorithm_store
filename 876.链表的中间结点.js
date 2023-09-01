/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast, slow;
  fast = slow = head;
  while (fast.next) {
    fast = fast.next;
    if (fast.next) fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
// @lc code=end
