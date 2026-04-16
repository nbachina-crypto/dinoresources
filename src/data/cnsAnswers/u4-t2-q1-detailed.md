## Message Authentication
**Message authentication** ensures that a received message is:
* **Genuine**
* **Unaltered**
* Sent by the **claimed sender**
It is a core requirement in **secure communication systems**.
---
## Message Authentication Requirements
### Data Integrity
* Ensures the message has **not been modified**
* Any change during transmission must be **detectable**
---
### Source Authentication
* Verifies the **identity of the sender**
* Prevents **impersonation attacks**
---
### Confidentiality (Optional)
* Ensures only authorized users can read the message
* Often combined with authentication using **encryption**
---
### Non-Repudiation
* Sender cannot deny sending the message
* Achieved using **digital signatures**
---
### Timeliness
* Ensures messages are **fresh**
* Prevents **replay attacks**
* Techniques:**Timestamps**, **Sequence numbers**, **Nonces**
---
## Message Authentication Functions
### 1. Message Encryption
* Encrypt the message using a shared key:
```
C = Encrypt(K, M)
```
* If decryption succeeds → message is assumed authentic
> Limitation: Does not always guarantee integrity on its own.
---
### 2. Message Authentication Code (MAC)
* Generated using a **secret key + message**:
```
MAC = H(K || M)
```
* Sender sends message + MAC
* Receiver recomputes and compares
* Provides:**Integrity** and **Authentication**
> Does NOT provide non-repudiation.
---
### 3. Hash Functions
* Compute digest of message:
```
Hash = H(M)
```
* Ensures: **Integrity only**
> Anyone can compute the hash → no authentication.
---
### 4. Keyed Hash (HMAC)
* Combines hash function with a secret key:
```
HMAC = H(K ⊕ opad || H(K ⊕ ipad || M))
```
* Provides:**Integrity** and **Authentication**
> Widely used in protocols like **SSL/TLS**.
---
### 5. Digital Signatures
* Uses **public key cryptography**:
```
Signature = Encrypt(K_priv, H(M))
```
* Verified using **public key**
* Provides:**Integrity**, **Authentication**, **Non-repudiation**
---
## Comparison of Methods
| Method            | Integrity | Authentication | Confidentiality | Non-Repudiation |
| ----------------- | --------- | -------------- | --------------- | --------------- |
| Encryption        | Partial   | Partial        | Yes             | No              |
| MAC / HMAC        | Yes       | Yes            | No              | No              |
| Hash Function     | Yes       | No             | No              | No              |
| Digital Signature | Yes       | Yes            | No              | Yes             |
