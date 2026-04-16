## Chinese Remainder Theorem (CRT)
The **Chinese Remainder Theorem (CRT)** is used to solve a system of **simultaneous congruences** with different moduli.
It states that if the moduli are **pairwise coprime**, then there exists a **unique solution modulo the product** of the moduli.
---
## Statement
If `n₁, n₂, ..., nₖ` are pairwise coprime integers, then the system:
```
x ≡ a₁ (mod n₁)
x ≡ a₂ (mod n₂)
...
x ≡ aₖ (mod nₖ)
```
has a unique solution modulo:
```
N = n₁ × n₂ × ... × nₖ
```
---
## Working Principle
* Solve each congruence **independently**
* Combine them using **modular inverses**
* Construct a value of `x` that satisfies all conditions simultaneously
---
## Algorithm (Two Congruences)
```
step 1: Given x ≡ a₁ (mod n₁), x ≡ a₂ (mod n₂)
step 2: Compute N = n₁ × n₂
step 3: Compute N₁ = N / n₁, N₂ = N / n₂
step 4: Find inverses:
        N₁y₁ ≡ 1 (mod n₁)
        N₂y₂ ≡ 1 (mod n₂)
step 5: Compute x = (a₁N₁y₁ + a₂N₂y₂) mod N
```
---
## Example 1
Solve:
```
x ≡ 2 (mod 3)
x ≡ 3 (mod 5)
```
### Step-by-step
* `n₁ = 3`, `n₂ = 5` (coprime)
* `N = 3 × 5 = 15`
* `N₁ = 5`, `N₂ = 3`
Find inverses:
* `5 mod 3 = 2` → inverse of `2 mod 3` is **2**
* `3 mod 5 = 3` → inverse of `3 mod 5` is **2**
Compute:
```
x = (2×5×2 + 3×3×2) mod 15
x = (20 + 18) mod 15 = 38 mod 15 = 8
```
**Final Answer:**
`x ≡ 8 (mod 15)`
### Verification
* `8 mod 3 = 2`
* `8 mod 5 = 3`
---
## Example 2
Solve:
```
x ≡ 1 (mod 4)
x ≡ 3 (mod 7)
```
### Step-by-step
* `N = 4 × 7 = 28`
* `N₁ = 7`, `N₂ = 4`
Find inverses:
* `7 mod 4 = 3` → inverse is **3**
* `4 mod 7 = 4` → inverse is **2**
Compute:
```
x = (1×7×3 + 3×4×2) mod 28
x = (21 + 24) mod 28 = 45 mod 28 = 17
```
**Final Answer:**
`x ≡ 17 (mod 28)`
### Verification
* `17 mod 4 = 1`
* `17 mod 7 = 3`
---
## Key Condition
> CRT works **only when the moduli are pairwise coprime**.
* If not coprime:
  * A solution may **not exist**
  * Or may **not be unique**
---
## Applications
CRT is widely used in:
* **Modular arithmetic computations**
* **Cryptography (RSA algorithm)** for faster calculations
* Solving large congruence systems efficiently
* Computer algorithms and number theory problems
