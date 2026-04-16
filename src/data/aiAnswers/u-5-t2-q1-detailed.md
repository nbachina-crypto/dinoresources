### Supervised Learning
**Supervised Learning** is a learning method in which the model is trained using **labeled data**.
Labeled data means each input is associated with a **correct output** or **target value**.
The main objective is to learn a mapping function from **input to output** so that the model can predict the correct result for new unseen data.
**Input → Model → Predicted Output**
During training, the model compares its predicted output with the actual output and minimizes the error using a learning algorithm.
---
### Working Process
1. collect labeled training data
2. feed input-output pairs to the model
3. learn the relationship between input and output
4. minimize prediction error
5. use the trained model for new data
---
### Example
Consider a **spam email classifier**.
| Email             | Output   |
| ----------------- | -------- |
| You won a prize   | Spam     |
| Meeting at 10 AM  | Not Spam |
| Claim your reward | Spam     |
The model learns patterns from these labeled examples and later classifies a new email.
---
### Types of Supervised Learning
## 1. Classification
Used when output is a **category or class label**.
Examples:
* spam / not spam
* disease / no disease
## 2. Regression
Used when output is a **continuous numerical value**.
Examples:
* house price prediction
* temperature forecasting
---
### Common Algorithms
* Linear Regression
* Logistic Regression
* Decision Trees
* Support Vector Machines
* Neural Networks
---
### Applications
Used for:
* image classification
* speech recognition
* medical diagnosis
* fraud detection
> **Important:** Supervised learning is mainly used when historical **labeled data** is available.
---
## Unsupervised Learning
**Unsupervised Learning** is a learning method in which the model is trained using **unlabeled data**.
There is **no predefined output label**.
The model discovers **hidden patterns, structures, or relationships** within the data on its own.
---
### Working Process
1. collect unlabeled data
2. identify similarities or patterns
3. group or organize the data
4. discover hidden structure
---
### Example
Suppose customer data contains:
* Age
* Income
* Purchase Frequency
The system groups similar customers into clusters such as:
* high-income frequent buyers
* low-income occasional buyers
This helps in **market segmentation**.
---
### Main Tasks
## 1. Clustering
Grouping similar data points together.
Example:
* customer segmentation
## 2. Association
Finding relationships among variables.
Example:
* items frequently bought together
## 3. Dimensionality Reduction
Reducing the number of features while preserving information.
Example:
* feature extraction in images
---
### Common Algorithms
* K-Means Clustering
* Hierarchical Clustering
* Apriori Algorithm
* Principal Component Analysis (**PCA**)
---
### Applications
Used for:
* market basket analysis
* anomaly detection
* recommendation systems
* data compression
> **Important:** Unsupervised learning is used when labeled data is unavailable.
---
## Key Difference
| Feature   | Supervised Learning | Unsupervised Learning |
| --------- | ------------------- | --------------------- |
| Data Type | Labeled data        | Unlabeled data        |
| Output    | Known output        | No output label       |
| Goal      | Prediction          | Pattern discovery     |
| Example   | Spam detection      | Customer grouping     |
---