The **RSA algorithm** uses two keys:
* **Public key (e, n)** → used to encrypt
* **Private key (d, n)** → used to decrypt
### Process
1. Choose two prime numbers and compute **n**
2. Select **e** and compute **d**
3. Encrypt using public key
4. Decrypt using private key
---
### Formulas
```text
Encryption:
C = M^e mod n
```
```text
Decryption:
M = C^d mod n
```
---
### Simple Example
* p = 3, q = 11 → n = 33
* φ(n) = 20
* e = 3, d = 7
Encryption:
* M = 4 → C = 31
Decryption:
* C = 31 → M = 4
> The original message is recovered because the public and private keys are mathematically linked, but deriving the private key without factorization is computationally difficult.
