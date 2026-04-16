## Fermat’s Little Theorem
**Fermat’s Little Theorem** states that if `p` is a **prime number** and `a` is an integer such that **gcd(a, p) = 1**, then:
```text
a^(p−1) ≡ 1 (mod p)
```
### Equivalent Form
```text
a^p ≡ a (mod p)
```
---
## Working Principle
* The integers `{1, 2, ..., p−1}` form a **multiplicative group modulo p**
* Multiplying each element by `a` (where `a` is not divisible by `p`) **rearranges (permutes)** the set
* Taking the product of all elements and simplifying leads to:
```text
a^(p−1) ≡ 1 (mod p)
```
---
## Examples
### Example 1
Let `a = 3`, `p = 7`:
```text
3^6 = 729
729 mod 7 = 1
```
So:
* **3⁶ ≡ 1 (mod 7)**
---
### Example 2
Let `a = 2`, `p = 5`:
```text
2^4 = 16 ≡ 1 (mod 5)
```
---
## Euler’s Theorem
**Euler’s Theorem** is a generalization of Fermat’s theorem.
If `gcd(a, n) = 1`, then:
```text
a^φ(n) ≡ 1 (mod n)
```
* `φ(n)` is **Euler’s Totient Function**
* It counts the integers less than `n` that are **coprime to n**
---
## Working Principle
* The integers coprime to `n` form a **multiplicative group modulo n**
* Multiplying each element by `a` permutes the set
* This leads to:
```text
a^φ(n) ≡ 1 (mod n)
```
---
## Examples
### Example 1
Let `a = 3`, `n = 10`
* Numbers coprime to `10`: `{1, 3, 7, 9}`
* So, **φ(10) = 4**
```text
3^4 = 81
81 mod 10 = 1
```
So:
* **3⁴ ≡ 1 (mod 10)**
---
### Example 2
Let `a = 2`, `n = 9`
* Coprime numbers: `{1, 2, 4, 5, 7, 8}`
* **φ(9) = 6**
```text
2^6 = 64
64 mod 9 = 1
```
So:
* **2⁶ ≡ 1 (mod 9)**
---
## Relation Between Fermat and Euler
* Fermat’s theorem is a **special case** of Euler’s theorem
* If `n = p` (prime), then:
```text
φ(p) = p − 1
```
So Euler’s theorem becomes:
```text
a^(p−1) ≡ 1 (mod p)
```
> This is exactly **Fermat’s Little Theorem**
---
## Applications
Both theorems are widely used in:
* **Modular exponentiation**
* **Primality testing**
* **Cryptography (RSA algorithm)**
* Computing **modular inverses**
* Encryption and decryption operations
