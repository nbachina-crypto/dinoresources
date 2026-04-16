## Forward and Backward Chaining (FOL)
**Forward Chaining** and **Backward Chaining** are inference mechanisms used in **First-Order Logic (FOL)** to reason with a **Knowledge Base (KB)**.
They operate on **Horn clauses** and use **unification** and **substitution** to derive conclusions.
---
## Forward Chaining
**Forward Chaining** is a *data-driven approach*.
It starts from **known facts** and applies rules to derive new facts until:
* The **goal is reached**, or
* No more inferences can be made
---
### Working Principle
* KB contains **facts and rules**
* Rules are of the form:
  **P₁ ∧ P₂ ∧ ... ∧ Pₙ → Q**
* Match rule premises with facts using **unification**
* Apply **substitution**
* Add inferred facts back to the KB
* Repeat the process
---
### Algorithm Flow
```
step 1: Initialize KB with known facts
step 2: Repeat:
          find a rule whose premises match facts
          apply unification and substitution
          add new inferred fact to KB
step 3: Stop if goal is derived or no new facts can be added
```
---
### Example
Given:
* **Parent(x, y) → Ancestor(x, y)**
* **Parent(A, B)**
Steps:
* Match **Parent(A, B)** with **Parent(x, y)**
* Substitute → **x = A, y = B**
* Infer → **Ancestor(A, B)**
---
## Backward Chaining
**Backward Chaining** is a *goal-driven approach*.
It starts with the **query (goal)** and works backward to check if it can be derived from known facts.
---
### Working Principle
* Start with the **goal**
* Check if it matches any **fact**
* If not:
  * Find rules that produce the goal
  * Replace goal with **subgoals (rule premises)**
* Recursively prove each subgoal using **unification**
---
### Algorithm Flow
```
step 1: Take goal/query
step 2: If goal matches a fact, success
step 3: Else find rules that conclude the goal
step 4: Replace goal with rule premises (subgoals)
step 5: Recursively prove subgoals
step 6: If all subgoals satisfied, goal is proven
```
---
### Example
Given:
* **Parent(x, y) → Ancestor(x, y)**
* **Parent(A, B)**
Query: **Ancestor(A, B)**
Steps:
* Match goal with **Ancestor(x, y)**
* Substitute → **x = A, y = B**
* New subgoal → **Parent(A, B)**
* Since it is a known fact → goal is **proven**
---
## Key Differences
| Feature     | Forward Chaining                  | Backward Chaining        |
| ----------- | --------------------------------- | ------------------------ |
| Approach    | Data-driven                       | Goal-driven              |
| Start Point | Known facts                       | Query/goal               |
| Direction   | Facts → Conclusion                | Goal → Facts             |
| Efficiency  | May generate unnecessary facts    | Focused on required goal |
| Use Case    | Generate all possible conclusions | Answer specific queries  |
