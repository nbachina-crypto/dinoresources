## Euclidean Algorithm
The **Euclidean Algorithm** is an efficient method for computing the **Greatest Common Divisor (GCD)** of two integers. It is based on the principle that the GCD remains unchanged if the larger number is replaced by its **remainder** when divided by the smaller number.
```text
GCD(a, b) = GCD(b, a mod b)
```
This process continues until the remainder becomes **zero**. The **last non-zero remainder** is the GCD.
---
## Algorithm Flow
```text
step 1: Input two integers a and b (a ≥ b)
step 2: If b = 0, return a as GCD
step 3: Compute r = a mod b
step 4: Replace a = b, b = r
step 5: Repeat steps 2–4
```
---
## Working Principle
At each step:
* The pair `(a, b)` is reduced to `(b, a mod b)`
* The remainder is always **smaller than b**
* Values decrease progressively, ensuring termination
> Any common divisor of `a` and `b` also divides `a mod b`, which guarantees correctness.
---
## Examples
### Example 1: GCD(48, 18)
```text
48 = 18 × 2 + 12
18 = 12 × 1 + 6
12 = 6 × 2 + 0
```
* When the remainder becomes **0**, stop
* The last non-zero remainder is **6**
**GCD(48, 18) = 6**
---
### Example 2: GCD(56, 15)
```text
56 = 15 × 3 + 11
15 = 11 × 1 + 4
11 = 4 × 2 + 3
4 = 3 × 1 + 1
3 = 1 × 3 + 0
```
* The last non-zero remainder is **1**
**GCD(56, 15) = 1**
---
## Applications
The Euclidean Algorithm is widely used for:
* Efficient computation of **GCD**, especially for large numbers
* Basis for the **Extended Euclidean Algorithm**
* Finding **multiplicative inverses** in modular arithmetic
* Cryptographic systems such as **RSA**
