The Euclidean Algorithm finds the GCD by **repeated division and remainders**.
```text
GCD(a, b) = GCD(b, remainder of a ÷ b)
```
* Divide the larger number by the smaller one
* Replace the pair with *(smaller number, remainder)*
* Repeat until the remainder becomes **0**
> The last non-zero number is the **GCD**.
---
## Quick Example
### GCD(48, 18)
```text
48 ÷ 18 → remainder 12
18 ÷ 12 → remainder 6
12 ÷ 6 → remainder 0
```
* The last non-zero remainder is **6**
**GCD = 6**
---
> **Key Idea:** Replacing numbers with their remainder does not change the GCD, making this method highly efficient for computations in **number theory** and **cryptography**.
