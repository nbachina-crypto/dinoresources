Chance-based games include **random elements** like dice rolls or card draws, so outcomes are **uncertain**.
The game tree includes:
* **MAX** → tries to maximize score
* **MIN** → tries to minimize score
* **CHANCE** → represents randomness
---
## Simplified Flow
```text
If MAX node → choose highest value
If MIN node → choose lowest value
If CHANCE node → calculate weighted average
```
---
## Simple Example
* A dice roll leads to multiple outcomes
* Each outcome has a **probability**
* The algorithm calculates the **average score**
This helps in choosing the **best decision under uncertainty**.
---
## Final Insight
**Expectiminimax =**
* Combines **decision-making + probability**
* Handles **uncertainty effectively**
* Extends Minimax for **real-world stochastic environments**
