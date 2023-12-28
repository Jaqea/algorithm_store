/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // if (head === null || head.next === null) return head;
  // let queue = [],
  //   p = head.next,
  //   q,
  //   count = 0,
  //   len = 0;
  // while (p != null) {
  //   q = p.next;
  //   p.next = null;
  //   queue.push(p);
  //   len++;
  //   p = q;
  // }
  // p = head;
  // while (count < len) {
  //   if (count % 2 === 0) {
  //     p.next = queue[queue.length - 1];
  //     queue.pop();
  //   } else {
  //     p.next = queue[0];
  //     queue.shift();
  //   }
  //   p = p.next;
  //   count++;
  // }
  // return head;
};
// @lc code=end
