## Key Management
**Key management** refers to the secure handling of cryptographic keys throughout their lifecycle, including:
* **Generation**
* **Storage**
* **Distribution**
* **Usage**
* **Replacement (rotation)**
> Effective key management is essential for maintaining the **security of cryptographic systems**.
---
## Key Management Functions
### Key Generation
* Keys must be generated using **secure random number generators**
* Ensures **unpredictability**
> Weak or predictable keys compromise the entire system.
---
### Key Storage
* Keys must be stored securely to prevent unauthorized access
Methods include:
* **Hardware Security Modules (HSM)**
* **Encrypted storage**
* **Access control mechanisms**
---
### Key Usage
* Keys should be used only for their **intended purpose** which are Encryption , Decryption or Signing
> Separation of keys reduces security risks.
---
### Key Lifetime and Update
* Keys should have a **defined lifetime**
* Periodic replacement (**key rotation**) is required
> Limits exposure if a key is compromised.
---
### Key Revocation
* Compromised or expired keys must be: **Revoked** and Removed from use immediately
---
## Key Distribution Mechanisms
### 1. Manual Distribution
* Keys are shared directly (physically or securely)
* **Advantage:** High security
* **Limitation:** Not scalable for large systems
---
### 2. Key Distribution Center (KDC)
A **trusted third party** that distributes keys.
```text
step 1: User A requests communication with B from KDC
step 2: KDC generates session key Ks
step 3: KDC sends Ks encrypted for A and B
step 4: A forwards B’s part to B
step 5: A and B use Ks for communication
```
* Used in **symmetric key systems** (e.g., Kerberos)
---
### 3. Public Key Distribution
* Public keys are shared openly
* Private keys remain secret
### Methods:
* **Public announcement** → simple but insecure
* **Public directory** → trusted repository
* **Public Key Infrastructure (PKI)** → uses **Certificate Authorities (CA)**
> PKI binds identities to public keys using **digital certificates**.
---
### 4. Diffie–Hellman Key Exchange
* Allows two parties to create a **shared secret key** over an insecure channel
* No prior key sharing required
> Vulnerable to **man-in-the-middle attacks** unless authenticated.
---
### 5. Hybrid Key Distribution
* Combines: **Public key cryptography** (for key exchange) and **Symmetric key cryptography** (for data encryption)
> Example: **SSL/TLS**
---
## Security Requirements
* **Confidentiality** → keys must remain secret
* **Integrity** → keys must not be altered
* **Authentication** → verify ownership of keys
* **Freshness** → prevent reuse of old keys
* **Scalability** → support large systems securely
---
## Applications
Key management is used in:
* **SSL/TLS protocols**
* **VPNs**
* **Secure email systems**
* **Enterprise security infrastructures**
