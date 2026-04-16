CSPs are usually solved using **backtracking search**.
The process is:
* **choose a variable**
* **assign a value**
* **check if constraints are satisfied**
* **continue if valid**
* **go back if invalid**
### Simple Flow
```text id="86241"
choose variable
assign value
check rule
if wrong -> backtrack
if correct -> continue
```
Additional techniques like **forward checking** and **heuristics** help make the search faster by reducing unnecessary choices.