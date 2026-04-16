**Propositional Logic** is a **formal system** in **Artificial Intelligence** and logic used to represent facts as statements that are either **true** or **false**.
These statements are called **propositions**.
A proposition is a **declarative statement with a definite truth value**.
### Examples
* **P**: It is raining
* **Q**: The ground is wet
Each proposition can have only one of two values:
* **True**
* **False**
---
## Logical Connectives
Propositions can be combined using **logical connectives**.
| Connective        | Symbol | Meaning                                |
| ----------------- | ------ | -------------------------------------- |
| **AND**           | ∧      | True only if both statements are true  |
| **OR**            | ∨      | True if at least one statement is true |
| **NOT**           | ¬      | Negates the truth value                |
| **IMPLIES**       | →      | If P then Q                            |
| **BICONDITIONAL** | ↔      | P if and only if Q                     |
### Example
If it is raining, then the ground is wet:
P → Q
This logic is widely used in **knowledge representation** and **reasoning**.
---
## Propositional Theorem Proving via Inference
**Theorem proving** means deriving a conclusion from a set of known facts and rules using **inference rules**.
The known statements are called **premises**, and the statement to be proved is the **conclusion**.
### General Process
```text id="48126"
define premises
apply inference rule
derive new proposition
repeat until conclusion is reached
```
---
## Common Inference Rules
### Modus Ponens
If:
P → Q
and:
P
then infer:
Q
### Example
```text id="35174"
P -> Q
P
therefore Q
```
---
### Modus Tollens
If:
P → Q
and:
¬ Q
then infer:
¬ P
---
### Resolution
Used to combine clauses and derive **contradictions or conclusions**.
---
## Example of Theorem Proving
Given:
* **P → Q**
* **Q → R**
* **P**
### Step 1
From:
* **P → Q**
* **P**
infer:
Q
### Step 2
From:
* **Q → R**
* **Q**
infer:
R
So **R is proved**.
> **Inference rules help AI derive new knowledge from existing facts.**
This inference-based proof process is used in:
* **expert systems**
* **knowledge-based agents**
---