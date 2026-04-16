**Acting under uncertainty** refers to making decisions when an intelligent system does not have **complete, exact, or reliable information** about the environment.
In **Artificial Intelligence**, this is necessary because real-world environments are often:
* **dynamic**
* **partially observable**
* **unpredictable**
---
## Necessity of Acting Under Uncertainty
In many practical situations, an agent cannot know the **exact state of the environment**.
This happens because of:
* **incomplete information** – not all facts are available
* **noisy sensors** – inputs may contain errors
* **unpredictable events** – future outcomes may change randomly
* **hidden variables** – some factors cannot be directly observed
### Example
A **self-driving car** may not clearly detect whether an object ahead is a **pedestrian or a shadow** due to fog or poor lighting.
Still, it must make a decision immediately.
So AI systems must act even when information is uncertain.
> **Real-world AI systems cannot wait for perfect information.**
This is essential in:
* **medical diagnosis**
* **robotics**
* **autonomous vehicles**
* **game playing with chance**
* **decision support systems**
---
## Challenges of Acting Under Uncertainty
### 1. Incomplete Knowledge
The system may not know the **complete state of the world**.
**Example:**
A robot may know obstacle locations only partially.
---
### 2. Uncertain Outcomes
The same action may lead to **different results**.
**Example:**
A move in a chance-based game may depend on a **dice roll**.
---
### 3. Sensor Errors
Inputs from sensors may be **inaccurate or delayed**.
---
### 4. Dynamic Environment
The environment may **change while the system is reasoning**.
---
### 5. Probabilistic Reasoning
The agent must often rely on **probabilities instead of exact logic**.
### Example
```text id="68241"
P(rain) = 0.7
P(clear) = 0.3
```
The agent must choose the **most rational action based on likelihood**.
---
### 6. Decision Complexity
Evaluating multiple uncertain outcomes increases **computational complexity**.
---
## Techniques Used to Handle Uncertainty
To handle uncertainty, AI commonly uses:
* **probability theory**
* **Bayesian reasoning**
* **decision trees**
* **expected utility models**
These help the system choose the **best possible action under uncertain conditions**.
---
