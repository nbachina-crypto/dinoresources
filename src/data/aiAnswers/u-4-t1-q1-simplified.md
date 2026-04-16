**Proof by resolution** checks if a conclusion is true using logic.
* Convert all statements into **CNF**
* Add the **opposite of the conclusion**
* Combine clauses to eliminate opposite terms
---
## Simplified Flow
```text
Convert to CNF
Add negation of conclusion
Apply resolution repeatedly
If contradiction found → statement is true
```
---
## Simple Example
Given:
* **P → Q**
* **P**
* Prove **Q**
Convert:
* **P → Q → (¬P ∨ Q)**
Now:
* (¬P ∨ Q), (P), (¬Q)
Steps:
* (P) with (¬P ∨ Q) → **Q**
* (Q) with (¬Q) → **contradiction**
---
## Final Insight
**Resolution =**
* Assume the opposite
* Derive contradiction
* Conclude the statement is **true**
This makes it a powerful method for **logical reasoning in AI systems**.
