## Cryptographic Hash Functions
A **cryptographic hash function** is an algorithm that takes an input message and produces a **fixed-length output** called a **hash** or **digest**.
---
## Key Properties
* **One-way function** → cannot reverse the hash to get the original input
* **Collision-resistant** → hard to find two inputs with the same hash
* **Avalanche effect** → small input change causes a large output change
---
## Applications
### Data Integrity Verification
* Used to check if data has been **altered**
* Sender computes hash and sends it with the message
* Receiver recomputes and compares
> If hashes match → data is intact
---
### Digital Signatures
* Instead of signing the full message, a **hash is signed**
```
Hash = H(M)
Signature = Encrypt(K_priv, Hash)
```
* Improves efficiency
* Ensures **integrity** and **authentication**
---
### Password Storage
* Systems store **hashed passwords**, not plain text
* During login: Input password is hashed and Compared with stored hash
> Secure systems use **salting** to prevent attacks like dictionary and rainbow tables
---
### Message Authentication (MAC)
* Hash functions are used to create **HMAC (Hash-based MAC)**
```
MAC = H(K || M)
```
* Combines **secret key + message**
* Ensures:**Integrity** and **Authentication**
---
### Blockchain and Cryptocurrencies
* Hash functions ensure **data immutability**
* Each block contains the hash of the **previous block**
> This creates a secure and tamper-resistant chain.
---
### File Verification and Checksums
* Software providers publish hash values (e.g., **SHA-256**)
* Users verify downloaded files by comparing hashes
> Ensures files are not corrupted or tampered with
---
### Key Derivation
* Used in **Key Derivation Functions (KDFs)**
* Generate secure keys from:Passwords and Shared secrets
> Example: session key generation in **SSL/TLS**
---
### Random Number Generation
* Used in **pseudo-random number generators**
* Provides unpredictability for cryptographic use
