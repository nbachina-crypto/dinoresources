### Fermat’s Little Theorem
If `p` is prime and `a` is not divisible by `p`:
```text
a^(p−1) mod p = 1
```
### Example
```text
3^6 mod 7 = 1
```
---
### Euler’s Theorem
Works for any number `n`:
```text
a^φ(n) mod n = 1
```
* Only valid when `a` and `n` are **coprime**
### Example
* `φ(10) = 4`
```text
3^4 mod 10 = 1
```
---
> **Key Idea:** Fermat’s theorem applies to primes, while Euler’s theorem generalizes it to all integers using the **totient function**.
