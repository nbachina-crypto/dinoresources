## Proof by Resolution (Propositional Logic)
**Proof by resolution** is a *refutation-based inference method* used to determine whether a statement is logically valid.
The idea is to:
* Convert all statements into **Conjunctive Normal Form (CNF)**
* Add the **negation of the conclusion**
* Apply resolution until a **contradiction (empty clause ⊥)** is derived
> If an empty clause is obtained, the original statement is **proven true**.
---
## Resolution Rule
The **resolution rule** states:
If two clauses contain **complementary literals**, they can be combined to form a new clause.
**Example:**
* From **(A ∨ B)** and **(¬A ∨ C)**
* Derive → **(B ∨ C)**
---
## Steps Involved
1. Convert all premises into **CNF**
2. Add the **negation of the conclusion**
3. Apply the **resolution rule** repeatedly
4. Continue until:
* **Empty clause (⊥)** is found → *proof successful*
* No new clauses can be generated → *proof fails*
---
## Algorithm Flow
```text
step 1: Convert all statements to CNF
step 2: Add negation of the goal
step 3: Apply resolution rule to derive new clauses
step 4: Repeat until:
        - empty clause is found (proof success), or
        - no new clauses can be generated (failure)
```
---
## Example
**Goal:** From **(P → Q)** and **(P)**, prove **(Q)**
### Step 1: Convert to CNF
* **P → Q** becomes **(¬P ∨ Q)**
Clauses:
* (¬P ∨ Q)
* (P)
Negate conclusion **Q → (¬Q)**
---
### Step 2: Clause Set
* (¬P ∨ Q)
* (P)
* (¬Q)
---
### Step 3: Apply Resolution
* Resolve **(P)** and **(¬P ∨ Q)**
  → **Q**
* Resolve **(Q)** and **(¬Q)**
  → **⊥ (empty clause)**
---
### Conclusion
Since a **contradiction (⊥)** is obtained, the statement **Q is proven true**.
> Resolution confirms that the argument is **logically valid**.
---
## Key Characteristics
* Based on **refutation (proof by contradiction)**
* Requires conversion to **CNF**
* Works by eliminating **complementary literals**
* Widely used in **automated theorem proving**
