### Conditional Probability
**Conditional Probability** is the probability of an event occurring when it is already known that another event has occurred.
In **AI**, it is used to model **dependent events** and **reasoning under uncertainty**.
The formula is:
**P(A|B) = P(A ∩ B) / P(B)**
Where:
* **P(A|B)** = probability of **A** given **B**
* **P(A ∩ B)** = probability that both **A** and **B** occur together
* **P(B)** = probability of event **B**
---
### Working Principle
The probability space is restricted only to the cases where **event B has occurred**.
Within this reduced space, the probability of **A** is calculated.
---
### Example
Consider an **AI medical system**.
Let:
* **A = patient has disease**
* **B = patient has fever**
Assume:
* **P(A ∩ B) = 0.15**
* **P(B) = 0.30**
Applying the formula:
**P(A|B) = 0.15 / 0.30 = 0.5**
So, if the patient has fever, the probability of disease is **0.5** or **50%**.
> **Important:** Conditional probability is widely used in AI for prediction and diagnosis.
---
### Applications in AI
Used in:
* spam detection
* medical diagnosis
* speech recognition
* robotics
* decision-making systems
---
## Full Joint Distribution
**Full Joint Distribution** is a table that gives the probability of **every possible combination of values** for a set of random variables.
It completely describes the probabilistic behavior of a system.
For **n Boolean variables**, the full joint distribution contains **2ⁿ entries**.
---
### Example
Consider two Boolean variables in an **AI weather prediction system**:
* **Rain = {Yes, No}**
* **Traffic = {High, Low}**
The full joint distribution is:
| Rain | Traffic | Probability |
| ---- | ------- | ----------- |
| Yes  | High    | 0.30        |
| Yes  | Low     | 0.10        |
| No   | High    | 0.20        |
| No   | Low     | 0.40        |
These probabilities represent **all possible combinations**.
The total must satisfy:
**0.30 + 0.10 + 0.20 + 0.40 = 1**
---
## Importance in AI
The **Full Joint Distribution** is the foundation for **probabilistic reasoning**.
Using it, any **conditional probability** or **marginal probability** can be derived.
### Example Calculations
Probability of traffic being high:
**P(Traffic = High) = 0.30 + 0.20 = 0.50**
Conditional probability of rain given high traffic:
**P(Rain = Yes | Traffic = High) = 0.30 / 0.50 = 0.60**
Thus, full joint distributions provide **complete knowledge of uncertainty** in an AI model.
---
