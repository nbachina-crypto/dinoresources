## Choosing the Best Hypothesis in Machine Learning
### Definition
In **machine learning**, a **hypothesis** is a candidate model or function that maps **input data** to **output predictions**.
During learning, many possible hypotheses may fit the training data.
The objective is to choose the hypothesis that performs best not only on the **training data** but also on **unseen data**.
The selection mainly depends on:
* **evaluation methods**
* **performance measures**
* **model selection techniques**
---
## 1. Training and Testing Method
The dataset is usually divided into two parts:
* **training set** → used to learn the hypothesis
* **test set** → used to evaluate performance
### Example
```text id="hy1"
total records = 100
training = 80
testing = 20
```
Suppose two hypotheses are trained:
* **H1 → Decision Tree**
* **H2 → Naive Bayes**
After testing:
| Hypothesis | Accuracy |
| ---------- | -------- |
| H1         | 90%      |
| H2         | 85%      |
Here, **H1** is considered better based on **accuracy**.
---
## 2. Accuracy and Error Rate
The most common method is to measure **prediction accuracy**.
**Accuracy = Correct Predictions / Total Predictions**
### Example
If out of 20 test samples, the model predicts 18 correctly:
**Accuracy = 18 / 20 = 0.9 = 90%**
**Error Rate = 1 − Accuracy**
So:
**Error = 1 − 0.9 = 0.1 = 10%**
Higher accuracy and lower error indicate a better hypothesis.
---
## 3. Cross Validation
To avoid choosing a hypothesis that performs well only for one split, **k-fold cross validation** is used.

The dataset is divided into **k equal parts**.
Example:
**k = 5**
```text id="cv1"
fold 1 → test, remaining → train
fold 2 → test, remaining → train
fold 3 → test, remaining → train
fold 4 → test, remaining → train
fold 5 → test, remaining → train
```
The average performance over all folds is calculated.
This gives a more reliable estimate.
---
## 4. Precision, Recall, and F1 Score
For classification problems, especially with **imbalanced data**, accuracy alone may not be enough.
### Precision
**Precision = TP / (TP + FP)**
### Recall
**Recall = TP / (TP + FN)**
### F1 Score
**F1 = 2 × (Precision × Recall) / (Precision + Recall)**
### Example
Given:
* **TP = 40**
* **FP = 10**
* **FN = 5**
Precision:
**40 / (40 + 10) = 40 / 50 = 0.8**
Recall:
**40 / (40 + 5) = 40 / 45 = 0.89**
A hypothesis with a **higher F1 score** is often preferred.
---
## 5. Bias–Variance Consideration
The best hypothesis should **generalize well**.
* **high bias** → model is too simple (**underfitting**)
* **high variance** → model is too complex (**overfitting**)
A good hypothesis balances both.
### Example
* a shallow decision tree may **underfit**
* a very deep tree may **overfit**
The best hypothesis is the one with **minimum test error**.
---
## 6. Simplicity Principle
When two hypotheses give similar accuracy, the **simpler one is preferred**.
This follows **Occam’s Razor**.
### Example
A small decision tree is preferred over a very complex tree if both give similar results.
This improves:
* interpretability
* generalization
---
## 7. Likelihood and Probability-Based Selection
In probabilistic models, the best hypothesis is the one with **maximum posterior probability**.
This is called **Maximum A Posteriori (MAP)** hypothesis.
**Best Hypothesis = argmax P(h | D)**
Where:
* **h** = hypothesis
* **D** = observed data
This method is common in **Bayesian learning**.
---