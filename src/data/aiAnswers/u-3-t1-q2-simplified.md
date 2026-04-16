
The **Minimax algorithm** helps a player choose the **best move** by exploring all possible future moves.
* **MAX** → tries to get the **highest score**
* **MIN** → tries to get the **lowest score**
The algorithm builds a **game tree**, evaluates outcomes, and selects the best move assuming the opponent also plays perfectly.
---
## Simplified Flow
```text
Start
  |
Check current game state
  |
If final state, return score
  |
Else generate possible moves
  |
If MAX turn, choose highest score
If MIN turn, choose lowest score
```
---
## Simple Example
* Move 1 leads to: **2, 5, 3** → MIN picks **2**
* Move 2 leads to: **1, 4, 6** → MIN picks **1**
Then:
* MAX compares **2 vs 1**
* Chooses **2**
---
## Final Insight
**Minimax =**
* **MAX maximizes the score**
* **MIN minimizes the score**
This ensures the **best possible decision** in competitive games.
