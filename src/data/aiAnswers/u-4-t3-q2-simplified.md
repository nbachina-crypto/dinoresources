**Unification** means matching two FOL expressions by replacing variables with suitable values.
### Example
Human(x)
and
Human(John)
Here:
x = John
This is **unification**.
**Lifting** means extending propositional logic inference rules to work with FOL expressions that contain variables.
### Example
```text id="82641"
Human(x) -> Mortal(x)
Human(Socrates)
therefore Mortal(Socrates)
```
So:
* **unification = variable matching**
* **lifting = generalized inference in FOL**