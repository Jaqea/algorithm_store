/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p,
    q,
    r,
    list = new ListNode();
  p = list1;
  q = list2;
  r = list;
  while (p && q) {
    if (p.val > q.val) {
      r.next = q;
      q = q.next;
      r = r.next;
    } else {
      r.next = p;
      p = p.next;
      r = r.next;
    }
  }
  if (p) r.next = p;
  if (q) r.next = q;
  return list.next;
};
// @lc code=end
