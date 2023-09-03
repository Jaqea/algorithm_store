/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let pre, p;
  pre = head;
  p = pre.next;
  while (p) {
    if (pre.val === p.val) {
      pre.next = p.next;
      p = p.next;
    } else {
      pre = pre.next;
      p = p.next;
    }
  }
  return head;
};
// @lc code=end
