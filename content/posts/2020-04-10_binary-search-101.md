---
title: Binary Search 101
date: 2020-04-05T09:50:27.440Z
category:
  - Code
tags:
  - ''
---
### Before We Begin

Have you ever wondered when to use `while(lo<hi)` `while(lo <= hi)` ? Have you ever wondered when to use `left = mid + 1` `left = mid` `right = mid + 1` `right = mid` ? Have you ever wondered why your binary search algorithm stuck in an infinity loop?
Well, at least I did all that, and if you are like me this article is for you.

*I'm not writing this article to have people "remember" the code, instead, I want use this article to introduce people a gateway of solving binary search problems.* Some of the content are sourced from [here(Chinese)](https://www.notion.so/Binary-Search-101-518118ba7a4246779d8e1394544e02a6#a5a01ce7b9944cf58175b186bf35c6a8). Much thanks to the original author.

### The Idea

1. Set `lo` and `hi` boundary, compute `mid` index
2. Compare target with `mid` , adjust `lo` & `hi` accordingly

![](https://miro.medium.com/max/600/1*EYkSkQaoduFBhpCVx7nyEA.gif)

### Time Complexity

O(log n)

### Basic Implementation (JavaScript)

```javascript

```

### Logic Flow of Solving Binary Search Problems

* **Choose `lo` & `hi`**

    Always double check what is the maximum range of possible values. For example, <LeetCode 35>,  since it's possible to insert a value at the very end, the boundary for this problem is actually `0 - n`.
* **Calculate `mid`** Always use the following, since it avoids overflow.

```

```

* **How to move `lo` and `hi`?**   Always use a condition we are 100% sure of.  It's always easier to eliminate options when we are 100% sure of something. For eample, if we are looking for `target <= x`, then for `target>nums[mid]` , we are 100% sure that our mid should never be considered. Thus we can type `lo = mid + 1` with all the confidence.

```

```

* `while` **Condition**   Always use `while (lo < hi)` so when the loop breaks, we are 100% sure that `lo == hi`   If it's possible that target doesn't exist, extra check needs to be performed.(Like this problem)
* 🔥**Avoid Infinite loop**

```

```

Consider when there's only 2 elements left, if the `if` condition goes to the `else` statement, since `left = mid`, our left boundary will not shrink, this code will loop for ever. Thus, we should use the upper mid.

```

```

Consider when there's only 2 elements left, if the `if` condition goes to the `else` statement, since `right = mid` our right boundary will not shrink, this code will loop for ever. Thus, we should use the lower mid. 	

#### Take Away

\* Always think of the situation where there's only 2 elements left!