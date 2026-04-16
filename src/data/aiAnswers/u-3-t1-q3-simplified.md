
**Alpha-Beta Pruning** is a faster version of **Minimax**.
* **alpha (α):** Best score for MAX so far
* **beta (β):** Best score for MIN so far
The algorithm stops exploring a branch when it detects that:
* It cannot produce a better result than already found
---
## Simplified Flow
```text
Start search
Keep updating alpha and beta
If alpha >= beta:
    stop checking that branch
```
---
## Simple Example
* One move guarantees score **5**
* Another branch can give at most **3**
Since **3 < 5**, that branch is **ignored (pruned)**.
---
## Final Insight
**Alpha-Beta Pruning =**
* Avoid unnecessary calculations
* Maintain same correctness as **Minimax**
* Significantly **improves performance** in game search algorithms
