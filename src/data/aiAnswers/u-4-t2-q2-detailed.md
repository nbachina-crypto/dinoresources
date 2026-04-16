In **First-Order Logic (FOL)**, **models** and **quantifiers** are fundamental concepts used to give **meaning to logical statements** and to express **general or existence-based facts**.
---
## Models in First-Order Logic
A **model** is an **interpretation** of a First-Order Logic statement that assigns meaning to its symbols and determines whether the statement is **true or false**.
A model mainly consists of:
* **Domain (Universe of Discourse)** – the set of all objects being discussed
* **Interpretation of constants** – which object each constant refers to
* **Interpretation of predicates** – which objects satisfy a property or relation
* **Interpretation of functions** – mapping from objects to objects
---
## Example of a Model
Consider the statement:
Human(Socrates)
A possible model is:
```text id="51824"
Domain = {Socrates, Plato}
Predicate Human = {Socrates}
```
In this model:
Human(Socrates)
is **true** because **Socrates belongs to the set assigned to Human**.
---
## Another Example
Consider:
∀ x,(Human(x) → Mortal(x))
This statement is **true in a model** if every object interpreted as **Human** is also interpreted as **Mortal**.
So, a model provides the **meaning and truth assignment** of FOL sentences.
> **A model tells us whether a logical statement is true in a given interpretation.**
---
## Quantifiers in First-Order Logic
Quantifiers are symbols used to express statements about **all objects** or **some objects** in the domain.
There are **two main quantifiers**.
---
## 1. Universal Quantifier (∀)
Means **for all**
### Syntax
∀x,P(x)
### Meaning
**P(x) is true for every object in the domain**
### Example
∀x,(Human(x) → Mortal(x))
Meaning:
> **All humans are mortal**
---
## 2. Existential Quantifier (∃)
Means **there exists**
### Syntax
∃ x,P(x)
### Meaning
There is **at least one object** in the domain for which **P(x)** is true.
### Example
∃x,Student(x)
Meaning:
> **There exists at least one student**
---
## Example with Both Quantifiers
∀x,(Student(x) → ∃ y,Teacher(y))
Meaning:
> **For every student, there exists a teacher**
---
## Importance
Quantifiers allow FOL to represent **generalized knowledge**, making it much more expressive than **propositional logic**.
---