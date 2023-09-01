/*
 * @lc app=leetcode.cn id=19 lang=c
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{
  // int i;
  // struct ListNode *p, *root, *pre, *q;
  // root = (struct ListNode *)malloc(sizeof(struct ListNode));
  // root->next = head;
  // p = root;
  // q = root;
  // i = 0;
  // while (p != NULL)
  // {
  //   /* code */
  //   if (i >= n)
  //   {
  //     pre = q;
  //     q = q->next;
  //   }
  //   p = p->next;
  //   i++;
  // }
  // pre->next = q->next;
  // free(q);

  // return root->next;

  int i = 1;
  struct ListNode *p, *q, *root;
  root = (struct ListNode *)malloc(sizeof(struct ListNode));
  root->next = head;
  if (root->next != NULL)
  {
    p = root;
    q = root->next;
    while (q->next != NULL)
    {
      if (i < n)
        i++;
      else
        p = p->next;
      q = q->next;
    }
    q = p->next;
    p->next = p->next->next;
    free(q);
  }

  return root->next;
}
// @lc code=end
