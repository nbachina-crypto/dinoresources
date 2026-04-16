## Alpha-Beta Pruning
**Alpha-Beta Pruning** is an optimization technique applied to the **Minimax algorithm**. It reduces the number of nodes evaluated in the game tree without affecting the final decision.
The primary goal is to **improve efficiency** by eliminating branches that cannot influence the outcome.
---
## Key Parameters
Two important values are maintained during the search:
* **alpha (α)** → The *best value that MAX can guarantee so far*
* **beta (β)** → The *best value that MIN can guarantee so far*
---
## Core Idea
The algorithm follows the same structure as **Minimax**, but introduces pruning:
* While exploring nodes, **alpha** and **beta** are updated
* If at any point **α ≥ β**, further exploration of that branch is stopped
> This condition indicates that the current branch cannot produce a better result than already explored options.
---
## Working Principle
### At MAX Node
* Update: **α = max(α, value)**
* Goal: Choose the **maximum value**
### At MIN Node
* Update: **β = min(β, value)**
* Goal: Choose the **minimum value**
---
### Pruning Conditions
## At **MAX node**:
* If a value **≥ β** is found → remaining children are **ignored**
## At **MIN node**:
* If a value **≤ α** is found → remaining children are **ignored**
---
## Algorithm Flow (Pseudocode)
```text
alphabeta(node, depth, alpha, beta, isMax):
    if node is terminal:
        return utility(node)

    if isMax:
        value = -infinity
        for each child:
            value = max(value, alphabeta(child, depth-1, alpha, beta, false))
            alpha = max(alpha, value)
            if alpha >= beta:
                break   // prune
        return value
    else:
        value = +infinity
        for each child:
            value = min(value, alphabeta(child, depth-1, alpha, beta, true))
            beta = min(beta, value)
            if alpha >= beta:
                break   // prune
        return value
```
---
## Example
Consider a **MAX node** with two branches:
* After evaluating the first branch → **α = 5**
* While evaluating the second branch: If a **MIN node returns ≤ 5**, further exploration is unnecessary
**Reason:** MAX already has a better option (**5**), so the subtree is **pruned**.
---
## Optimization Effect
| Aspect          | Minimax   | Alpha-Beta Pruning     |
| --------------- | --------- | ---------------------- |
| Nodes evaluated | All nodes | Reduced nodes          |
| Time Complexity | O(b^d)    | O(b^(d/2)) (best case) |
| Efficiency      | Lower     | Higher                 |
* **b** → branching factor
* **d** → depth of tree
> Effective pruning can **double the search depth** for the same computational cost.
---
## Performance Factors
* **Best Case:** When optimal moves are evaluated first → maximum pruning
* **Worst Case:** Poor move ordering → behaves like standard Minimax
