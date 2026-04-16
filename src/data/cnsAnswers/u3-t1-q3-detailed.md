## Modular Arithmetic
**Modular arithmetic** is a system of arithmetic for integers where values **wrap around** after reaching a fixed number called the **modulus**.
It is written as:
```text
a ≡ b (mod n)
```
This means:
* `a` and `b` leave the **same remainder** when divided by `n`
* Or equivalently, `n` divides `(a − b)`
```text
a ≡ b (mod n) if n | (a − b)
```
---
## Working Principle
Using the **Division Algorithm**, any integer `a` can be written as:
```text
a = nq + r
0 ≤ r < n
```
* **r** is called the **residue** of `a mod n`
* Numbers with the same remainder belong to the same **equivalence class**
---
## Example
```text
17 = 5 × 3 + 2
```
So:
* `17 mod 5 = 2`
* `17 ≡ 2 (mod 5)`
---
## Basic Operations
### Addition
```text
(a + b) mod n = [(a mod n) + (b mod n)] mod n
```
### Subtraction
```text
(a − b) mod n = [(a mod n) − (b mod n)] mod n
```
### Multiplication
```text
(a × b) mod n = [(a mod n) × (b mod n)] mod n
```
---
## Operation Example
```text
(7 + 9) mod 5 = 16 mod 5 = 1
```
Using modular properties:
```text
(7 mod 5 + 9 mod 5) mod 5 = (2 + 4) mod 5 = 6 mod 5 = 1
```
---
## Properties of Modular Arithmetic
### Closure
* Results of `(a + b) mod n`, `(a − b) mod n`, `(a × b) mod n` are always in:
  `{0, 1, ..., n−1}`
---
### Commutative Property
* `a + b ≡ b + a (mod n)`
* `a × b ≡ b × a (mod n)`
---
### Associative Property
* `(a + b) + c ≡ a + (b + c) (mod n)`
* `(a × b) × c ≡ a × (b × c) (mod n)`
---
### Distributive Property
* `a × (b + c) ≡ (a × b + a × c) (mod n)`
---
### Identity Elements
* **Additive identity:**
  `a + 0 ≡ a (mod n)`
* **Multiplicative identity:**
  `a × 1 ≡ a (mod n)`
---
### Additive Inverse
For every `a`, there exists `−a` such that:
```text
a + (−a) ≡ 0 (mod n)
```
---
### Multiplicative Inverse
An integer `a` has an inverse modulo `n` if:
```text
a × a⁻¹ ≡ 1 (mod n)
```
> This exists only when **GCD(a, n) = 1**
---
## Example: Multiplicative Inverse
Find inverse of `3 mod 7`:
```text
3 × 5 = 15 ≡ 1 (mod 7)
```
* Inverse of **3** is **5**
---
## Applications
Modular arithmetic is essential in:
* **Cryptography**
* **RSA Algorithm**
* **Diffie-Hellman Key Exchange**
* **Hashing functions**
