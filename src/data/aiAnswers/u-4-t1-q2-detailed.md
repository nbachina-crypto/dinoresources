`Forward Chaining` and `Backward Chaining` are inference techniques used in rule-based systems and knowledge-based agents to derive conclusions from a set of facts and rules.
Both use `IF–THEN` rules, but they differ in the direction of reasoning.
Forward Chaining:
Forward chaining is a `data-driven` inference method. It starts with the known facts and repeatedly applies rules to infer new facts until a goal or conclusion is reached.
Flow:
```text id="54128"
known facts
   |
match applicable rules
   |
infer new facts
   |
repeat
   |
reach conclusion
```
Example:
Rules:
`IF rain THEN wet_ground`
`IF wet_ground THEN slippery`
Fact:
`rain`
Inference:
`rain → wet_ground → slippery`
So the reasoning moves from facts toward the conclusion.
It is useful when:
* all initial data is available
* multiple conclusions may be needed
* continuous monitoring systems are used
Backward Chaining:
Backward chaining is a `goal-driven` inference method. It starts with the goal or query and works backward to determine whether the known facts support it.
Flow:
```text id="47216"
goal
   |
find rule producing goal
   |
check required conditions
   |
verify facts
   |
prove goal
```
Example:
Goal:
`slippery`
Rule:
`IF wet_ground THEN slippery`
Now the system checks whether `wet_ground` is true.
Another rule:
`IF rain THEN wet_ground`
Now it checks whether `rain` is a known fact.
If `rain` exists, the goal is proved.
Comparison:
```text id="35841"
Forward Chaining   : facts -> conclusion
Backward Chaining  : goal -> facts
```
Key Difference:
* `Forward chaining` begins from available dat
* `Backward chaining` begins from the desired conclusion
Applications:
`Forward chaining` → expert systems, monitoring systems
`Backward chaining` → diagnostic systems, query answering