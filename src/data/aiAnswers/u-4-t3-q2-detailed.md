In **First-Order Logic (FOL)**, **Unification** and **Lifting** are important concepts used in **automated reasoning** and **theorem proving**.
They help the inference system work with:
* **variables**
* **predicates**
* **generalized rules**
---
## Unification
**Unification** is the process of making **two logical expressions identical** by finding suitable substitutions for their variables.
In simple terms, it finds a set of **variable replacements** that makes two predicates match.
### Example 1
Consider:
Human(x)
and
Human(Socrates)
These can be unified by substituting:
x = Socrates
After substitution:
Human(Socrates) = Human(Socrates)
---
## Most General Unifier (MGU)
The substitution set is called the **Most General Unifier (MGU)**.
### Example 2
```text id="47218"
Loves(x, y)
Loves(John, Mary)
```
MGU:
* **x = John**
* **y = Mary**
Result:
Loves(John, Mary)
Unification is widely used in:
* **resolution**
* **forward chaining**
* **backward chaining**
* **logic programming**
It is essential because FOL statements often contain **variables**.
> **Unification helps the system match predicates by replacing variables with correct values.**
---
## Lifting
**Lifting** is the process of extending **inference rules from propositional logic to first-order logic** by using variables and unification.
In propositional logic, inference works only on **exact statements**.
### Propositional Example
```text id="31574"
P -> Q
P
therefore Q
```
In FOL, the same reasoning is generalized using **predicates and variables**.
### FOL Example
∀ x,(Human(x) → Mortal(x))
Human(Socrates)
Using unification:
x = Socrates
Inference:
Mortal(Socrates)
This generalized reasoning is called **lifting**.
So, lifting allows propositional inference rules such as:
* **Modus Ponens**
* **Resolution**
to be applied in **First-Order Logic**.
This leads to:
* **Generalized Modus Ponens**
* **Lifted Resolution**
---
## Importance
* **unification** matches expressions
* **lifting** applies inference at the predicate level
Together, they make **first-order inference more powerful and flexible**.
---