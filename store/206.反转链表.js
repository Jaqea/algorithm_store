/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
let headNode;
const reverse = (head) => {
  if (!head) return;
  let node = reverse(head.next);
  if (node) node.next = head;
  else headNode = head;
  return head;
};
var reverseList = function (head) {
  // 法一：非递归
  // let vh = new ListNode(),
  //   p = head,
  //   q;
  // while (p) {
  //   q = p.next;
  //   p.next = vh.next;
  //   vh.next = p;
  //   p = q;
  // }
  // return vh.next;
  // 法二：递归
  // let node;
  // headNode = null;
  // if (head) node = reverse(head);
  // if (node) node.next = null;
  // return headNode;
  // if (!head || !head.next) {
  //   return head;
  // }
  // let pre = head,
  //   cur = pre.next;
  // pre.next = null;
  // while (cur) {
  //   const temp = cur.next;
  //   cur.next = pre;
  //   pre = cur;
  //   cur = temp;
  // }
  // return pre;

  const reverse = (node) => {
    if (!node || !node.next) {
      return node;
    }
    const nextNode = reverse(node.next);
    node.next.next = node;
    node.next = null;
    return nextNode;
  };

  return reverse(head);
};
// @lc code=end
