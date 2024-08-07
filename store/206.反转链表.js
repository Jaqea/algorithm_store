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

  // const reverse = (node) => {
  //   if (!node || !node.next) {
  //     return node;
  //   }
  //   const nextNode = reverse(node.next);
  //   node.next.next = node;
  //   node.next = null;
  //   return nextNode;
  // };

  // return reverse(head);

  // if (!head || !head.next) {
  //   return head;
  // }

  // const arr = [],
  //   root = head;
  // let p = head,
  //   left,
  //   right;
  // while (p) {
  //   arr.push(p);
  //   p = p.next;
  // }

  // (left = 0), (right = arr.length - 1);
  // p = head;

  // while (left <= right) {
  //   const rightNode = arr[right];
  //   rightNode.next = p.next;
  //   p.next = rightNode;
  //   p = rightNode.next;
  //   left++;
  //   right--;
  // }

  // p.next = null;

  // return root;

  if (!head || !head.next) {
    return head;
  }

  const root = new ListNode();
  let p = head;

  while (p) {
    const temp = p.next;
    p.next = root.next;
    root.next = p;
    p = temp;
  }

  return root.next;
};
// @lc code=end
