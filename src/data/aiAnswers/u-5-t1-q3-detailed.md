### Bayes Rule
**Bayes Rule** is a fundamental probability theorem used in **AI** to update the probability of a hypothesis when new evidence is observed.
It helps intelligent systems make decisions under uncertainty by revising earlier beliefs based on incoming data.
The formula is:
**P(A|B) = (P(B|A) × P(A)) / P(B)**
Where:
* **P(A|B)** = posterior probability (updated probability after evidence)
* **P(B|A)** = likelihood
* **P(A)** = prior probability
* **P(B)** = evidence probability
---
### Working Principle
An **AI system** first starts with an initial probability called the **prior probability**.
When new evidence is received, the system checks how likely that evidence is if the hypothesis is true.
Using **Bayes Rule**, it updates the prior belief and produces a new probability called the **posterior probability**.
---
### Example
Consider an **AI medical diagnosis system**.
Let:
* **A = patient has fever disease**
* **B = patient has high temperature**
Given:
* **P(A) = 0.1**
* **P(B|A) = 0.8**
* **P(B) = 0.2**
Applying Bayes Rule:
**P(A|B) = (0.8 × 0.1) / 0.2**
**P(A|B) = 0.08 / 0.2 = 0.4**
So, after observing high temperature, the probability that the patient has the disease becomes **0.4** or **40%**.
> **Important:** The system improves its decision after receiving new evidence.
---
## Applications in AI Systems
### 1. Naive Bayes Classification
This is one of the most common applications of Bayes Rule in **AI**.
It is used for:
* spam detection
* email filtering
* document classification
* sentiment analysis
The classifier computes the probability of each class and selects the class with the **highest posterior probability**.
Example:
If an email contains words like **“win”**, **“offer”**, and **“free”**, the system calculates the probability that it belongs to the **spam class**.
---
### 2. Medical Diagnosis Systems
Used to predict diseases from symptoms.
Example:
* probability of dengue given fever and body pain
---
### 3. Speech Recognition
Used to predict the most probable word from an audio signal.
Example:
* recognizing whether the spoken word is **“cat”** or **“cap”**
---
### 4. Robotics
Used in robot localization and navigation.
A robot updates its belief about its current position based on **sensor inputs**.
---
### 5. Computer Vision
Used in image recognition and object detection where data may be **noisy or incomplete**.
---
### 6. Bayesian Networks
Bayes Rule is the foundation of **Bayesian Networks**, which model probabilistic relationships between variables in intelligent systems.
---