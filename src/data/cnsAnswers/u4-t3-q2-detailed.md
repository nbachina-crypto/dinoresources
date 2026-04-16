## Distribution of Public Keys
**Public key distribution** ensures that a public key **truly belongs to the claimed user**, preventing **impersonation and man-in-the-middle attacks**.
---
## Methods for Public Key Distribution
### 1. Public Announcement
* Users publish their public keys openly (e.g., email, websites)
### Example
```text
K_pub(A) = (e, n)
```
* Anyone can use this key to encrypt messages for A
> **Issue:** No authentication → attackers can replace the key and impersonate the user.
---
### 2. Publicly Available Directory
* A **trusted directory** stores user identities and their public keys
### Working
* Users register their keys
* Others retrieve keys from the directory
### Example
```text
User A → K_pub(A)
```
> **Security Requirement:** Directory must be protected against unauthorized changes and provide authenticated access.
---
### 3. Public Key Authority
* A **trusted authority** provides public keys on request
### Working
```text
step 1: A requests B’s public key from authority
step 2: Authority sends K_pub(B) with timestamp and signature
step 3: A verifies authority’s signature
```
### Example
```text
Encrypt(K_priv(Auth), [K_pub(B), timestamp])
```
* A verifies using the authority’s public key
> Prevents key substitution attacks but requires **real-time communication** with the authority.
---
### 4. Public Key Infrastructure (PKI)
* Most widely used method
* Uses **Certificate Authorities (CA)**
### Working Principle
* CA issues a **digital certificate** linking identity to public key
### Certificate Structure
```text
Certificate = {User ID, K_pub(User), validity period, CA signature}
```
### Example
```text
Cert(A) = Sign(K_priv(CA), [A, K_pub(A)])
```
* Others verify using the **CA’s public key**
> Ensures the public key is **authentic and trusted**.
---
### 5. Certificate Chains
* Used when the CA is not directly trusted
### Structure
```text
User Cert → Intermediate CA → Root CA
```
* Verification is done step-by-step up to a **trusted root CA**
---
## Security Considerations
* **Authentication** → key belongs to correct user
* **Integrity** → key is not altered
* **Freshness** → certificates include validity period
* **Revocation** → compromised keys listed in **CRL (Certificate Revocation Lists)**
---
## Applications
Public key distribution is used in:
* **SSL/TLS protocols**
* **Secure email systems**
* **Digital signatures**
* **Web authentication**
