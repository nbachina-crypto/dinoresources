**First-Order Logic (FOL)** is a **formal language** used in **Artificial Intelligence** to represent knowledge about **objects, their properties, and relationships**.
It is more expressive than **propositional logic** because it can talk about:
* **individual objects**
* **variables**
* **quantified statements**
---
## Syntax of FOL
**Syntax** defines the **symbols and rules used to form valid expressions**.
The main components are:
### Constants
Specific objects or entities.
Examples:
* **John**
* **Car1**
* **5**
### Variables
Symbols that can represent any object.
Examples:
* **x**
* **y**
* **z**
### Predicates
Represent **properties or relations**.
Examples:
* **Human(x)**
* **Loves(x,y)**
### Functions
Map objects to objects.
Examples:
* **Father(x)**
* **Age(x)**
### Logical Connectives
| Symbol | Meaning |
| ------ | ------- |
| **∧**  | AND     |
| **∨**  | OR      |
| **¬**  | NOT     |
| **→**  | IMPLIES |
| **↔**  | IFF     |
### Quantifiers
| Symbol | Meaning                                 |
| ------ | --------------------------------------- |
| **∀**  | Universal quantifier → “for all”        |
| **∃**  | Existential quantifier → “there exists” |
---
## Example Syntax
A valid FOL sentence is:
∀x, (Human(x) → Mortal(x))
### Structure Example
```
quantifier + variable + predicate + connective + predicate
```
---
## Semantics of FOL
**Semantics** defines the **meaning or interpretation** of the expressions.
It explains what the symbols refer to in the **real world**.
For example:
Human(John)
means **John belongs to the set of humans**.
The statement:
∀ x,(Human(x) → Mortal(x))
semantically means:
> **For every object x, if x is human, then x is mortal.**
---
## Example of Meaning
If we know:
Human(Socrates)
Then by inference:
Mortal(Socrates)
This shows how **meaning is derived from syntax**.
---
## Another Example
### Syntax
∃x ,Student(x)
### Semantics
> **There exists at least one student.**
Thus:
* **syntax = structure / grammar**
* **semantics = meaning / interpretation**
---
## Applications
FOL is widely used in:
* **knowledge representation**
* **logical reasoning**
* **theorem proving**
---