## S/MIME (Secure/Multipurpose Internet Mail Extensions)
**S/MIME** is a standard for securing **email communication** using **public key cryptography**.
It provides:
* **Confidentiality**
* **Integrity**
* **Authentication**
* **Non-repudiation**
---
## Working Principle
S/MIME combines:
* **Symmetric encryption** (for efficiency)
* **Public key cryptography** (for key exchange)
* **Digital signatures** (for authentication)
---
## 1. Confidentiality (Encryption)
* Message is encrypted using a **symmetric session key**
* Session key is encrypted using the **recipient’s public key**
```
step 1: Generate session key Ks
step 2: Encrypt message: C = Encrypt(Ks, M)
step 3: Encrypt Ks using recipient public key: E = Encrypt(K_pub(B), Ks)
step 4: Send (C, E)
```
### Receiver
* Decrypt `Ks` using private key
* Use `Ks` to decrypt message
---
## 2. Authentication and Integrity (Digital Signature)
* Sender signs the message using their **private key**
```
step 1: Compute hash = H(M)
step 2: Signature S = Encrypt(K_priv(A), hash)
step 3: Send (M, S)
```
### Receiver
* Verifies signature using **sender’s public key**
---
## 3. Combined Operation (Sign + Encrypt)
S/MIME typically performs both operations:
```
step 1: Sign message → (M, S)
step 2: Encrypt (M, S) using session key
step 3: Encrypt session key using recipient public key
step 4: Send encrypted package
```
---
## Certificate Usage
* S/MIME relies on **X.509 certificates**
* Issued by a **Certificate Authority (CA)**
> Certificates bind a user’s identity to their public key.
---
## Example
User A sends a secure email to User B:
* A signs the message using **A’s private key**
* A encrypts the message using a **session key**
* Session key is encrypted using **B’s public key**
### At Receiver (B)
* Decrypt session key using **B’s private key**
* Decrypt message using session key
* Verify signature using **A’s public key**
---
## Role in Email Security
### Confidentiality
* Only intended recipient can read the email
---
### Integrity
* Detects any modification in the message
---
### Authentication
* Verifies sender identity
---
### Non-Repudiation
* Sender cannot deny sending the message
---
## Interoperability
S/MIME is supported in:
* **Microsoft Outlook**
* **Gmail (via extensions)**
* **Enterprise email systems**
---
## Security Considerations
* Requires proper **certificate management (PKI)**
* Private keys must be **securely stored**
* Certificate revocation handled via: **CRL** and  **OCSP**
