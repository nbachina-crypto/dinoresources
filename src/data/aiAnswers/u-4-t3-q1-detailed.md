**Propositional Inference** and **First-Order Inference** are reasoning processes used in **Artificial Intelligence** to derive conclusions from known facts and rules.
The main difference lies in the **level of expressiveness** and the **type of knowledge represented**.
---
## Propositional Inference
In **propositional inference**, knowledge is represented as simple propositions that are either **true** or **false**.
### Example
* **P**: It is raining
* **Q**: The ground is wet
A rule can be written as:
P → Q
Inference is performed using rules such as:
* **Modus Ponens**
* **Resolution**
* **Truth Table methods**
### Example Inference
```text id="41827"
P -> Q
P
therefore Q
```
This type of inference treats each statement as an **indivisible unit**.
It does **not represent objects, relations, or variables**.
### Characteristics
* **uses simple propositions**
* **no variables or quantifiers**
* **less expressive**
* **easier to compute**
---
## First-Order Inference
In **First-Order Inference**, knowledge is represented using:
* **predicates**
* **variables**
* **functions**
* **quantifiers**
### Example
∀ x,(Human(x) → Mortal(x))
Human(Socrates)
Inference:
Mortal(Socrates)
Here, reasoning involves **objects and relationships**.
---
## Inference Techniques Used
The inference process may include:
* **unification** – matching variables with constants
* **substitution** – replacing variables with values
* **generalized modus ponens**
* **resolution in FOL**
### Example
```text id="57284"
forall x (Human(x) -> Mortal(x))
Human(Socrates)
therefore Mortal(Socrates)
```
---
## Key Differences
| Propositional Inference      | First-Order Inference |
| ---------------------------- | --------------------- |
| Simple true/false statements | Objects + relations   |
| No variables                 | Variables allowed     |
| No quantifiers               | Uses ∀ and ∃          |
| Less expressive              | Highly expressive     |
| Simple reasoning             | Complex reasoning     |
---
## Summary
In short:
* **propositional inference** works on **complete statements**
* **first-order inference** works on **entities and relationships**
**First-order inerence** is more powerful and suitable for **real-world knowledge representation**.
> **First-order inference can represent detailed facts about objects and their relationships.**
---