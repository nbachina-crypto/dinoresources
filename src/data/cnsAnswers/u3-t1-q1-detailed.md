## Division Algorithm
The **Division Algorithm** is a fundamental result in **number theory**. It states that for any integer `a` and any positive integer `b`, there exist unique integers `q` and `r` such that:
```text
a = bq + r
0 ≤ r < b
```
* **a** → dividend
* **b** → divisor
* **q** → quotient
* **r** → remainder
The remainder must always be **non-negative** and **less than the divisor**, ensuring uniqueness.
---
## Working Principle
When dividing `a` by `b`:
* Find the **largest multiple of `b`** that does not exceed `a`
* That multiple is `bq`
* The leftover part is the **remainder `r`**
---
## Examples
### Example 1
For `a = 17`, `b = 5`:
```text
17 = 5 × 3 + 2
```
* **q = 3**
* **r = 2**
Since `0 ≤ 2 < 5`, the result is valid.
---
### Example 2
For `a = 23`, `b = 7`:
```text
23 = 7 × 3 + 2
```
* **q = 3**
* **r = 2**
Again, `r < b`, so the condition holds.
---
### Example 3 (Exact Division)
For `a = 20`, `b = 4`:
```text
20 = 4 × 5 + 0
```
* **q = 5**
* **r = 0**
> Exact divisibility occurs when the **remainder is zero**.
---
### Example 4 (Negative Integer)
For `a = -11`, `b = 3`:
```text
-11 = 3 × (-4) + 1
```
* **q = -4**
* **r = 1**
> Even for negative numbers, the remainder must satisfy **0 ≤ r < b**.
---
## Uniqueness of Quotient and Remainder
If:
```text
a = bq₁ + r₁
a = bq₂ + r₂
```
where:
* `0 ≤ r₁ < b`
* `0 ≤ r₂ < b`
Then:
```text
b(q₁ - q₂) = r₂ - r₁
```
Since `r₂ - r₁` lies between `-(b-1)` and `b-1`, the only possible multiple of `b` in this range is **0**.
Therefore:
* **r₁ = r₂**
* **q₁ = q₂**
> This proves the **uniqueness** of quotient and remainder.
---
## Applications
The Division Algorithm is widely used in:
* **Modular arithmetic**
* **GCD (Greatest Common Divisor) computation**
* **Euclidean Algorithm**
* **Cryptography**
