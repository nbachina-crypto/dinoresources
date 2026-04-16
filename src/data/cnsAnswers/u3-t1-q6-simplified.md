CRT helps find a number that gives **different remainders** when divided by different numbers.
---
## Quick Example
Find `x` such that:
```
x ≡ 2 (mod 3)
x ≡ 3 (mod 5)
```
* The solution is:
```
x = 8
```
Because:
* `8 mod 3 = 2`
* `8 mod 5 = 3`
---
## Final Result
```
x ≡ 8 (mod 15)
```
> **Key Idea:** If the moduli are coprime, CRT guarantees a **unique solution modulo their product**, making it highly efficient for solving modular systems.
