## Minimax Algorithm
The **Minimax algorithm** is a decision-making algorithm used in **two-player, turn-based, zero-sum games** such as *tic-tac-toe, chess, and checkers*. It assumes that both players play **optimally**.
One player (**MAX**) tries to **maximize the score**, while the other (**MIN**) tries to **minimize it**.
---
## Game Representation
In **Minimax**, the game is represented as a **search tree**:
* Each node represents a **game state**
* The root node is the **current state**
* Branches represent **possible moves**
* Levels alternate between:
  * **MAX (maximizing player)**
  * **MIN (minimizing player)**
---
## Core Idea
* **MAX** selects the move with the **highest value**
* **MIN** selects the move with the **lowest value**
* Terminal states are evaluated using a **utility function**
Typical utility values:
* **+1** → MAX wins
* **-1** → MAX loses
* **0** → Draw
---
## Working of Minimax
The algorithm works **recursively**:
1. Explore all possible moves
2. Continue until **terminal states** are reached
3. Evaluate terminal states
4. Propagate values **up the tree**
5. At each level:
* **MAX node → choose maximum value**
* **MIN node → choose minimum value**
This ensures the **optimal move** is selected.
---
## Algorithm Flow
```text
Start
  |
Generate current game state
  |
Is state terminal?
  |---- Yes ---> Return utility value
  |
  No
  |
Is it MAX player's turn?
  |---- Yes ---> Generate all child states
  |              Apply Minimax to each child
  |              Return maximum value
  |
  |---- No ----> Generate all child states
                 Apply Minimax to each child
                 Return minimum value
```
---
## Decision Tree Example
```text
                Current State
                     |
             -------------------
             |                 |
          Move A            Move B
             |                 |
           MIN               MIN
         /  |  \           /  |  \
        3   5   2         9   1   4
         \  |  /           \  |  /
       Minimum = 2       Minimum = 1

             MAX chooses max(2, 1) = 2
```
**Explanation:**
* For **Move A**, MIN selects **2**
* For **Move B**, MIN selects **1**
* MAX chooses the **maximum → 2 (Move A)**
---
## Pseudocode
```text
minimax(state, isMax):
    if state is terminal:
        return utility(state)

    if isMax:
        best = -infinity
        for each child in successors(state):
            value = minimax(child, false)
            best = max(best, value)
        return best
    else:
        best = +infinity
        for each child in successors(state):
            value = minimax(child, true)
            best = min(best, value)
        return best
```
---
### Complexity Analysis
## **Time Complexity:** *O(b^d)*
* *b* = branching factor
* *d* = depth of tree

## **Space Complexity:** *O(d)* (depth-first recursion)
> The algorithm can be computationally expensive due to exploring many possible states.
---
## Key Properties
* **Complete** for finite game trees
* Always returns the **optimal move** if both players are rational
* Widely used in **adversarial search problems**
