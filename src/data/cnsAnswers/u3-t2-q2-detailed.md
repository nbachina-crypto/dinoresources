## RSA Algorithm
The **RSA algorithm** is a *public key cryptosystem* based on the mathematical difficulty of factoring large integers. It uses two keys:
* **Public key** for encryption
* **Private key** for decryption
---
## Key Generation
The RSA key generation process involves the following steps:
```text
1. Select two large prime numbers p and q
2. Compute n = p × q
3. Compute φ(n) = (p − 1)(q − 1)
4. Choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1
5. Compute d such that d × e ≡ 1 mod φ(n)
```
* **Public Key** = (e, n)
* **Private Key** = (d, n)
---
## Encryption and Decryption
### Encryption
* Ciphertext is generated using the public key
```text
C = M^e mod n
```
### Decryption
* Original message is recovered using the private key
```text
M = C^d mod n
```
---
## Worked Example
### Given Values
* p = 3, q = 11
### Step 1: Compute n
* n = 3 × 11 = **33**
### Step 2: Compute φ(n)
* φ(n) = (3 − 1)(11 − 1) = 2 × 10 = **20**
### Step 3: Choose e
* e = 3 (since gcd(3, 20) = 1)
### Step 4: Compute d
* d × 3 ≡ 1 mod 20
* d = 7 (since 3 × 7 = 21 ≡ 1 mod 20)
### Keys
* **Public Key** = (3, 33)
* **Private Key** = (7, 33)
---
### Encryption Process
* Plaintext M = 4
```text
C = 4^3 mod 33
C = 64 mod 33 = 31
```
* **Ciphertext = 31**
---
### Decryption Proces
```text
M = 31^7 mod 33
```
Step simplification:
* 31 ≡ -2 mod 33
* (-2)^7 = -128
* -128 mod 33 = 4
* **Recovered Plaintext = 4**
---
## Working Principle
* Encryption uses **exponentiation with the public key**
* Decryption uses **exponentiation with the private key**
The correctness is guaranteed by **Euler’s Theorem**, ensuring that applying powers *e* and *d* reverses the operation modulo *n*.
---
## Security Basis
The security of RSA relies on:
* The difficulty of **factoring n into p and q**
* Without p and q, it is hard to compute **φ(n)**
* Without φ(n), deriving the private key **d** is infeasible
> Large prime numbers are essential for strong security in RSA.
