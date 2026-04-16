Solving a **Constraint Satisfaction Problem (CSP)** using **search techniques** involves systematically assigning values to variables while ensuring that **all constraints remain satisfied**.
The objective is to reach a **complete assignment** in which:
* every variable has a value
* no constraint is violated
A CSP is represented as:
```text id="csp-search-form"
CSP = (Variables, Domains, Constraints)
```
The most common search technique used is **backtracking search**.
---
## Backtracking Search Process
The algorithm assigns values **one variable at a time** and checks whether the **partial assignment is consistent**.
### General Workflow
```text id="45173"
select unassigned variable
choose a value from domain
check constraints
if consistent assign value
move to next variable
if no valid value backtrack
repeat until solution found
```
---
## Step-by-Step Working
1. **Select an unassigned variable**
2. **Pick a value** from its domain
3. **Check all related constraints**
4. If valid, continue with the **next variable**
5. If invalid, try **another value**
6. If no values work, return to the **previous variable (backtrack)**
---
## Example
For **map coloring**:
* **A, B, C** are variable
* **domain = {Red, Green, Blue}**
If:
* **A = Red**
* **B = Red**
and this violates:
A ≠ B
the algorithm **backtracks** and tries another color for **B**.
> **Backtracking means undoing the last assignment and trying a different value.**
---
## Search Techniques Used in CSPs
### Backtracking
Basic **depth-first search** with undo operation on failure.
### Forward Checking
After assigning a value, it removes **inconsistent values from neighboring domains** to reduce future conflicts.
## Example
If:
* **A = Red**
then **Red** is removed from the domains of adjacent variables.
This reduces unnecessary choices.
### Constraint Propagation
Further reduces domains by repeatedly enforcing constraints across the network.
A common method is **Arc Consistency**.
For a binary constraint:
X ≠ Y
every value in **X** must have at least one valid value in **Y**.
---
## Heuristics
Heuristics are used to **optimize search**.
### Common Heuristics
| Heuristic                          | Purpose                                      |
| ---------------------------------- | -------------------------------------------- |
| **MRV (Minimum Remaining Values)** | Choose variable with fewest legal values     |
| **Degree heuristic**               | Choose variable with most constraints        |
| **Least Constraining Value**       | Choose value that restricts others the least |
These techniques **reduce the search space** and improve efficiency.