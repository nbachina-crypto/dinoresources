## Security of RSA Algorithm
The **security of RSA** is based on the computational hardness of the **integer factorization problem**. Given a large composite number **n = p × q**, it is extremely difficult to determine the prime factors **p** and **q** when they are sufficiently large.
Since the private key **d** depends on **φ(n) = (p − 1)(q − 1)**, knowing **p** and **q** is essential. Without factoring **n**, deriving the private key from the public key **(e, n)** is not feasible.
---
## Trapdoor One-Way Function
RSA relies on a **trapdoor one-way function**:
* **Easy operation**:
  Encryption using modular exponentiation
* **Hard operation**:
  Reversing without the private key
```text
C = M^e mod n
```
> The private key acts as the *trapdoor* that makes decryption feasible.
---
## Importance of Key Size
**Key size** is a critical factor in RSA security.
* Small keys (e.g., 512-bit) → vulnerable to attacks
* Recommended minimum → **2048-bit keys**
* Larger keys → higher computational security
Modern attacks like the **General Number Field Sieve (GNFS)** can break small key sizes efficiently.
---
## Common Vulnerabilities
RSA can be insecure if improperly implemented.
### 1. Brute-Force Factorization
* If **n is small**, attackers can factor it easily
* Leads to recovery of private key
### 2. Mathematical Attacks
* **Chosen-ciphertext attacks**
* **Low-exponent attacks** (e.g., small *e*)
Example:
* Same message encrypted with small *e* across different moduli
* Can be recovered using **Chinese Remainder Theorem**
---
## Role of Padding
Raw RSA is **deterministic**:
* Same plaintext → same ciphertext
This enables:
* Dictionary attacks
* Replay attacks
### Solution: Padding Schemes
* **OAEP (Optimal Asymmetric Encryption Padding)**
* Adds randomness to encryption
* Protects against chosen-plaintext and chosen-ciphertext attacks
> Padding is essential for secure RSA usage.
---
## Side-Channel Attacks
These attacks exploit **implementation weaknesses**, not mathematics.
* Timing analysis
* Power consumption monitoring
Attackers may infer bits of the private key.
### Countermeasures
* Constant-time algorithms
* Blinding techniques
---
## Secure Key Generation
Strong key generation is essential.
* Use **high-quality random number generators**
* Ensure primes **p and q are large and unpredictable**
* Avoid:
  * Closely spaced primes
  * Weak randomness
> Weak primes compromise the entire RSA system.
---
## Integrity and Authentication
RSA alone provides **confidentiality only**.
To ensure full security:
* Combine with **hash functions** (e.g., SHA)
* Use **digital signatures**
Provides:
* **Integrity**
* **Authentication**
---
## Practical Usage
In modern systems like **SSL/TLS**:
* RSA is used for Key exchange and Digital signatures
* It is Not used for bulk encryption due to High computational cost
Instead:
* Symmetric algorithms handle actual data encryption
