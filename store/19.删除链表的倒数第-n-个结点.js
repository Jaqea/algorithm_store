/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) {
    return head;
  }

  let vh = new ListNode(0, head),
    slow = vh,
    fast = slow;

  while (n) {
    fast = fast.next;
    --n;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let node = slow.next;
  slow.next = node.next;
  node = null;

  return vh.next;
};
// @lc code=end
