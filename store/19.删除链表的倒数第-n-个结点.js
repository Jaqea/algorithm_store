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
  if (head) {
    let p,
      q,
      vh = new ListNode();
    vh.next = head;
    p = vh;
    q = p.next;
    while (n && q) {
      q = q.next;
      n--;
    }
    while (q) {
      p = p.next;
      q = q.next;
    }
    if (p.next) p.next = p.next.next;
    else p.next = null;
    return vh.next;
  }
  return head;
};
// @lc code=end
