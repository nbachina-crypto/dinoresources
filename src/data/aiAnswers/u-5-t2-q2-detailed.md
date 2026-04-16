## Decision Tree Learning
**Decision tree learning** is a supervised learning technique used for **classification** and **regression** tasks.
It builds a **tree structure** where:
* **Internal nodes** represent tests on attributes
* **Branches** represent outcomes of tests
* **Leaf nodes** represent final predictions (class labels or values)
---
## Basic Idea
The algorithm starts with a **labeled dataset** and recursively splits it into smaller subsets.
The goal is to create subsets that are increasingly **homogeneous** (similar in terms of target output).
---
## Splitting Criteria
At each step, the best attribute is selected using measures such as:
* **Information Gain**
* **Gain Ratio**
* **Gini Index**
---
**Entropy** measures the impurity or disorder in the dataset
**Information Gain** measures the reduction in entropy after splitting:
> The attribute with the **highest Information Gain** is chosen for splitting.
---
## Algorithm Flow
```
step 1: Start with the full dataset as root
step 2: If all examples belong to same class → create leaf node
step 3: Else select best attribute using splitting criterion
step 4: Partition dataset based on attribute values
step 5: Recursively apply steps to each subset
step 6: Stop when:
        - no attributes remain, or
        - subset is sufficiently pure
```
---
## Overfitting and Pruning
A decision tree may become **too complex**, leading to **overfitting**.
### Types of Pruning
## **Pre-pruning**
* Stop tree growth early
* Conditions: minimum samples, max depth, etc.

## **Post-pruning**
* Remove unnecessary branches after tree is built
* Based on validation performance
> Pruning improves the model’s **generalization ability**.
---
## Example
Consider a dataset for deciding whether to **play tennis** with attributes:
* Outlook
* Temperature
* Humidity
Steps:
* Compute **Information Gain** for each attribute
* Select the best one (e.g., **Outlook**) as root
* Split dataset and repeat recursively
**Sample rule:**
* If **Outlook = Sunny** and **Humidity = High** → **Do not play**
---
### Complexity
## **Time Complexity:** *O(n × m log n)*
* **n** → number of samples
* **m** → number of attributes
---
## Key Characteristics
* Easy to **interpret and visualize**
* Works for both **categorical and numerical data**
* Handles **non-linear decision boundaries**
* May suffer from **overfitting without pruning**
