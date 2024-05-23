/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const deleteRepeat = (head) => {
  if (!head || !head.next) return head;

  if (head.val !== head.next.val) {
    const nextNode = deleteRepeat(head.next);
    head.next = nextNode;

    return head;
  } else {
    let node = head.next;

    while (node && node.val === head.val) {
      node = node.next;
    }

    return deleteRepeat(node);
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  /** 法一：迭代 */
  // if (!head || !head.next) return head;
  // let root,
  //   left,
  //   right,
  //   last,
  //   isMove = false;
  // root = left = new ListNode();
  // left.next = head;
  // last = head;
  // right = last.next;

  // while (right) {
  //   while (right && last.val === right.val) {
  //     isMove = true;
  //     right = right.next;
  //   }

  //   if (isMove) {
  //     left.next = right;
  //     isMove = false;
  //   } else left = last;

  //   last = right;
  //   if (right) right = right.next;
  // }

  // return root.next;
  /** 法二：递归 */
  return deleteRepeat(head);
};
// @lc code=end
