Resolution in **FOL** proves statements by:
* Converting into **standard form (CNF)**
* Adding the **negation of the goal**
* Using **unification** to match terms
* Eliminating opposite literals
---
## Simplified Flow
```
Convert to CNF
Add negation of goal
Unify matching terms
Apply resolution
If contradiction found → statement is true
```
---
## Simple Example
Given:
* All men are mortal
* Socrates is a man
Goal: **Socrates is mortal**
Convert:
* (¬Man(x) ∨ Mortal(x))
* Man(Socrates)
* ¬Mortal(Socrates)
Steps:
* Combine first two → **Mortal(Socrates)**
* Combine with ¬Mortal(Socrates) → **contradiction**
---
## Final Insight
**Resolution in FOL =**
* Use **unification + substitution**
* Eliminate contradictions
* Prove statements through **logical consistency**
This makes it a powerful tool for **AI reasoning and theorem proving**.
