/*
 * @lc app=leetcode.cn id=232 lang=c
 *
 * [232] 用栈实现队列
 */

// @lc code=start

typedef struct
{
  int stack1[100];
  int stack2[100];
  int top1;
  int top2;
} MyQueue;

MyQueue *myQueueCreate()
{
  MyQueue *queue = (MyQueue *)malloc(sizeof(MyQueue));
  queue->top1 = -1;
  queue->top2 = -1;
  return queue;
}

void myQueuePush(MyQueue *obj, int x)
{
  if (obj->top2 < 99)
    obj->stack2[++obj->top2] = x;
  else
  {
    if (obj->top1 == -1)
    {
      while (obj->top2 >= 0)
        obj->stack1[++obj->top1] = obj->stack2[obj->top2--];
      obj->stack2[++obj->top2] = x;
    }
  }
}

int myQueuePop(MyQueue *obj)
{
  if (obj->top1 != -1)
    return obj->stack1[obj->top1--];
  else
  {
    if (obj->top2 != -1)
    {
      while (obj->top2 >= 0)
        obj->stack1[++obj->top1] = obj->stack2[obj->top2--];
      return obj->stack1[obj->top1--];
    }
  }
  return NULL;
}

int myQueuePeek(MyQueue *obj)
{
  if (obj->top1 != -1)
    return obj->stack1[obj->top1];
  else
  {
    if (obj->top2 != -1)
    {
      while (obj->top2 >= 0)
        obj->stack1[++obj->top1] = obj->stack2[obj->top2--];
      return obj->stack1[obj->top1];
    }
  }
  return NULL;
}

bool myQueueEmpty(MyQueue *obj)
{
  if (obj->top1 == -1 && obj->top2 == -1)
    return true;
  else
    return false;
}

void myQueueFree(MyQueue *obj)
{
  if (!myQueueEmpty(obj))
  {
    if (obj->top1 != -1)
      obj->top1 = -1;
    if (obj->top2 != -1)
      obj->top2 = -1;
  }
}

/**
 * Your MyQueue struct will be instantiated and called as such:
 * MyQueue* obj = myQueueCreate();
 * myQueuePush(obj, x);

 * int param_2 = myQueuePop(obj);

 * int param_3 = myQueuePeek(obj);

 * bool param_4 = myQueueEmpty(obj);

 * myQueueFree(obj);
*/
// @lc code=end
