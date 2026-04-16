## Chance-Based Games in AI
**Chance-based games** in **Artificial Intelligence (AI)** involve **randomness**, where outcomes are not fully determined by player actions.
Examples include:
* *Backgammon*
* *Card games*
* *Dice-based games*
These require algorithms that handle both **adversarial decisions** and **probabilistic events**.
---
## Game Tree Representation
To model such games, the game tree includes three types of nodes:
* **MAX nodes** → Decision by maximizing player
* **MIN nodes** → Decision by minimizing opponent
* **CHANCE nodes** → Represent random events with known probabilities
---
## Expectiminimax Algorithm
The **Expectiminimax algorithm** is an extension of **Minimax** designed for handling randomness.
It modifies the decision process by introducing **expected value calculations** at chance nodes.
---
## Core Idea
* **MAX nodes** → Select the **maximum value**
* **MIN nodes** → Select the **minimum value**
* **CHANCE nodes** → Compute the **expected value (average outcome)**
---
## Expected Value Formula
At a **CHANCE node**, the value is computed as:
```
Expected value = SUM(Probability x Value)
```
---
## Working Principle
1. Evaluate terminal states using a **utility function**
2. Recursively explore all possible states
3. Apply:
* **Max operation** at MAX nodes
* **Min operation** at MIN nodes
* **Expected value calculation** at CHANCE nodes
---
## Algorithm Flow (Pseudocode)
```text
expectiminimax(state, isMax):
    if state is terminal:
        return utility(state)

    if isMax:
        best = -infinity
        for each child:
            value = expectiminimax(child, false)
            best = max(best, value)
        return best

    else if is MIN:
        best = +infinity
        for each child:
            value = expectiminimax(child, true)
            best = min(best, value)
        return best

    else if state is CHANCE:
        value = 0
        for each outcome:
            prob = probability(outcome)
            value += prob * expectiminimax(outcome, nextPlayer)
        return value
```
---
## Example
Consider a **dice-based game**:
* A player’s move depends on rolling a die (values **1–6**)
* Each outcome has probability **1/6**
The algorithm:
* Evaluates all possible outcomes
* Computes the **expected utility**
* Chooses the move with the **highest expected value**
---
## Key Characteristics
* Assumes **known probability distributions**
* Evaluates **all possible outcomes**
* Uses **expected utility** instead of guaranteed outcomes
> Optimal decisions are based on **average expected results**, not certainty.
---
## Complexity Analysis
| Factor                 | Description                   |
| ---------------------- | ----------------------------- |
| Decision branching (b) | Number of moves               |
| Chance branching (n)   | Number of outcomes            |
| Depth (m, k)           | Levels of decision and chance |
**Time Complexity:**
* *O(b^m × n^k)*
> Complexity increases significantly due to additional branching at chance nodes.
