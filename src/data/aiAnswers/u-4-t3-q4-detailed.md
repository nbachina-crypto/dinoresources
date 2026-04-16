## Resolution in First-Order Logic (FOL)
**Resolution in First-Order Logic (FOL)** is an inference rule used to derive conclusions by eliminating **contradictory literals**.
It extends propositional resolution by introducing:
* **Variables**
* **Unification**
* **Substitution**
It is a *refutation-based method*, meaning a statement is proven by showing that its **negation leads to a contradiction**.
---
## Key Concepts
### Clauses in FOL
* Expressed in **Conjunctive Normal Form (CNF)**
* Each clause is a **disjunction of literals**
### Unification
* Process of making two literals **identical**
* Achieved through substitution
* The substitution found is called the **Most General Unifier (MGU)**
---
## Resolution Rule in FOL
If two clauses contain complementary literals that can be unified:
* From: **(A ∨ L₁)** and **(¬B ∨ L₂)**
* If **A and B unify with substitution θ**
* Then the result is: **(L₁ ∨ L₂)θ**
---
## Steps Involved
1. Convert all statements into **CNF**
2. **Standardize variables** (rename to avoid conflicts)
3. Apply **Skolemization** (remove existential quantifiers)
4. Drop **universal quantifiers**
5. Convert into **clauses**
6. Apply **unification and resolution**
7. Repeat until:
* **Empty clause (⊥)** is derived → *success*
* No new clauses → *failure*
---
## Algorithm Flow
```
step 1: Convert KB and negation of goal into CNF
step 2: Standardize variables
step 3: Apply Skolemization
step 4: Convert into clauses
step 5: Select two clauses with complementary literals
step 6: Unify literals using substitution
step 7: Generate new clause (resolvent)
step 8: Repeat until:
        - empty clause is derived (success), or
        - no new clauses can be formed (failure)
```
---
## Example
**Goal:** Prove **Mortal(Socrates)**
### Given:
1. **∀x (Man(x) → Mortal(x))**
2. **Man(Socrates)**
---
### Step 1: Convert to CNF
* **Man(x) → Mortal(x)** → **(¬Man(x) ∨ Mortal(x))**
Clauses:
* (¬Man(x) ∨ Mortal(x))
* Man(Socrates)
Negate goal:
* **¬Mortal(Socrates)**
---
### Step 2: Clause Set
* (¬Man(x) ∨ Mortal(x))
* Man(Socrates)
* ¬Mortal(Socrates)
---
### Step 3: Apply Resolution
* Unify **Man(x)** with **Man(Socrates)**
  → **θ = {x / Socrates}**
* Resolve: (¬Man(x) ∨ Mortal(x)) and Man(Socrates)
    → **Mortal(Socrates)**

* Resolve: Mortal(Socrates) and ¬Mortal(Socrates)
    → **⊥ (empty clause)**
---
### Conclusion
Since the **empty clause (⊥)** is derived, the statement **Mortal(Socrates)** is proven true.
> Resolution in FOL successfully combines **logical inference + unification**.
---
## Key Characteristics
* Extends propositional resolution with **variables**
* Uses **unification (MGU)** for matching literals
* Based on **refutation (contradiction)**
* Widely used in **automated reasoning systems**
