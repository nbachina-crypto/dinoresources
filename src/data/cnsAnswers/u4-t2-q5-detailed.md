## Digital Signature Standard (DSS)
The **Digital Signature Standard (DSS)** is defined by **NIST** for generating and verifying **digital signatures**. It specifies:
* **Digital Signature Algorithm (DSA)**
* Approved hash functions such as **SHA**
> DSS provides **authentication, integrity, and non-repudiation**, but **does not provide encryption**.
---
## Working Principle (DSA under DSS)
### Domain Parameters
* Choose a large prime `p`
* Choose a prime `q` such that:
```
q | (p − 1)
```
* Choose generator:
```
g = h^((p−1)/q) mod p
```
---
### Key Generation
* Choose private key:
```
0 < x < q
```
* Compute public key:
```
y = g^x mod p
```
---
## Signature Generation
For message `M`:
```text
step 1: Compute H = H(M)
step 2: Choose random number k, where 0 < k < q
step 3: Compute r = (g^k mod p) mod q
step 4: Compute s = k^(-1) (H + x·r) mod q
step 5: Signature is (r, s)
```
---
## Signature Verification
Receiver verifies `(r, s)`:
```text
step 1: Check 0 < r, s < q
step 2: Compute H = H(M)
step 3: Compute w = s^(-1) mod q
step 4: Compute u1 = H·w mod q
step 5: Compute u2 = r·w mod q
step 6: Compute v = ((g^u1 · y^u2) mod p) mod q
step 7: If v = r → valid signature
        Else → invalid
```
---
## Example (Conceptual)
Given:
* `p = 23`, `q = 11`, `g = 2`
* Private key: `x = 3`
### Public Key
```
y = 2^3 mod 23 = 8
```
---
### Signature Generation
* Assume `H = 9`, `k = 4`
```
r = (2^4 mod 23) mod 11 = 16 mod 11 = 5
```
* Compute inverse:
```
k^(-1) mod 11 = 3
```
* Compute:
```
s = 3(9 + 3×5) mod 11 = 3(24) mod 11 = 72 mod 11 = 6
```
* **Signature = (5, 6)**
---
### Verification
* Apply verification steps
* Check if:
```
v = r
```
> If true → signature is valid
---
## Properties of DSS
* Uses **public key cryptography**
* Relies on **secure hash functions (SHA)**
* Requires a **random number `k` for each signature**
* Provides: **Authentication**, **Integrity**, **Non-repudiation**
> Does NOT provide confidentiality
---
## Security Considerations
* `k` must be:**Unique** **Random** **Secret**
> If `k` is reused or exposed, the private key `x` can be recovered.
* Security depends on **Discrete logarithm problem**
---
## Applications
DSS is used in:
* **Digital certificates**
* **Secure authentication systems**
* **Government and enterprise security**
* **Secure communications**
