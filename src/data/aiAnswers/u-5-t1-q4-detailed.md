### Definition
**Bayesian Networks** are probabilistic graphical models used in **AI** to represent **uncertain knowledge** and the **dependencies between different variables**.
They are based on **probability theory** and **Bayes Rule**.
A Bayesian Network mainly consists of **two components**:
---
### 1. Directed Acyclic Graph (DAG)
The structure is represented as a **directed graph**
In this graph:
* **nodes** represent random variables
* **edges** represent conditional dependencies between variables
The graph is:
* **directed** → arrows show the direction of influence
* **acyclic** → no loops or cycles are present
---
### 2. Conditional Probability Tables (CPT)
Each node has a **Conditional Probability Table (CPT)**.
This table stores the probability of that node based on its **parent nodes**.
---
## Construction of Bayesian Network
The construction involves the following steps:
1. identify all relevant variables
2. determine dependency relationships among variables
3. draw directed edges from cause to effect
4. ensure the graph has no cycles
5. assign prior probabilities to root nodes
6. create CPTs for dependent nodes
---
## Example
Consider an **AI medical diagnosis system** with three variables:
* **Disease**
* **Fever**
* **Cough**
Here, disease influences both fever and cough.
### Structure
```text
Disease → Fever
Disease → Cough
```
In this network:
* **Disease** = parent node
* **Fever** and **Cough** = child nodes
---
### Given Probabilities
* **P(Disease) = 0.2**
Conditional probabilities:
* **P(Fever | Disease) = 0.8**
* **P(Fever | not Disease) = 0.1**
* **P(Cough | Disease) = 0.7**
* **P(Cough | not Disease) = 0.2**
---
### Joint Probability Calculation
The joint probability is:
**P(Disease, Fever, Cough) = P(Disease) × P(Fever | Disease) × P(Cough | Disease)**
Substituting the values:
**= 0.2 × 0.8 × 0.7**
**= 0.112**
This means the probability that a patient has the disease and shows both symptoms is **11.2%**.
> **Important:** Bayesian Networks help calculate combined probabilities efficiently.
---
## Significance in AI
### 1. Reasoning Under Uncertainty
They help systems make decisions even when information is **incomplete or noisy**.
---
### 2. Probabilistic Inference
They can predict unknown variables from known evidence
Example:
* finding the probability of disease from symptoms
---
### 3. Knowledge Representation
Complex real-world relationships can be represented in a **structured graphical form**.
---
### 4. Decision Support Systems
Widely used in:
* expert systems
* medical diagnosis
* fault detection
* risk analysis
---
### 5. Machine Learning
Used in:
* classification
* prediction
* probabilistic reasoning
---
### 6. Reduced Computation
Instead of calculating full joint probabilities for all variables, dependencies reduce the computation.
This makes Bayesian Networks highly useful in intelligent systems.
---