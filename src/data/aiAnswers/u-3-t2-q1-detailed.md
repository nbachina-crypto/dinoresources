A **Constraint Satisfaction Problem (CSP)** is a problem in **Artificial Intelligence** where the objective is to **find values for a set of variables such that all given constraints are satisfied**.
A CSP is defined by **three main components**:
* **Variables** – the unknowns that need values
* **Domains** – the possible values each variable can take
* **Constraints** – rules that restrict valid combinations of values
It is commonly represented as:
```text id="csp-form"
CSP = (X, D, C)
```
where:
* **X** = set of variables
* **D** = domain of each variable
* **C** = set of constraints
---
## Example
In **map coloring**:
* **X = {A, B, C}*
* **D = {Red, Green, Blue}**
Constraint: **adjacent regions must not have the same color**
So if **A** is adjacent to **B**, then:
A ≠ B
The goal is to assign colors so **all such conditions hold**.
---
## Applications of CSP
CSPs are widely used in:
* **map coloring**
* **scheduling**
* **timetabling**
* **Sudoku**
* **resource allocation**
---
## Constraint Network Structure
A **Constraint Network** is the **graphical representation of a CSP**.
It consists of:
* **nodes** → variables
* **edges** → constraints between variables
### Structure
```text id="58374"
   A ------- B
    \       /
      \   /
        C
```
Here:
* **A, B, and C** are variables
* each edge represents a constraint such as **A ≠ B**
This network helps **visualize relationships among variables**.
> **Constraint networks make it easier to understand variable dependencies.**
---
## Types of Constraints
| Type                         | Description                     | Example                    |
| ---------------------------- | ------------------------------- | -------------------------- |
| **Unary constraints**        | Involve one variable            | **X > 0**                  |
| **Binary constraints**       | Involve two variables           | **X ≠ Y**                  |
| **Higher-order constraints** | Involve more than two variables | Multiple variable relation |
---
## Solution Process
The solution process involves assigning values while checking consistency.
### Basic Solving Flow
```text id="73261"
select variable
assign value from domain
check constraints
if valid continue
else backtrack
```
This is often solved using:
* **backtracking search**
* **forward checking**
* **constraint propagation**