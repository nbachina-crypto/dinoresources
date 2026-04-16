## Digital Signature
A **digital signature** is a cryptographic mechanism used to verify:
* **Authenticity** (who sent the message)
* **Integrity** (message not altered)
* **Origin** (true sender)
It uses **public key cryptography**.
---
## Working Principle
* The sender uses their **private key** to create the signature
* The receiver uses the sender’s **public key** to verify it
---
## Process
```text
step 1: Sender computes hash = H(M)
step 2: Sender computes signature S = Encrypt(K_priv, hash)
step 3: Sender sends (M, S)
Receiver:
step 4: Compute hash1 = H(M)
step 5: Compute hash2 = Decrypt(K_pub, S)
step 6: If hash1 = hash2 → valid signature
        Else → invalid
```
> Hashing improves efficiency and ensures message integrity.
---
## Example (Conceptual)
Let:
* `M = "HELLO"`
### Sender
* Compute hash: `H(M)`
* Create signature:
```text
S = Encrypt(K_priv, H(M))
```
### Receiver
* Compute hash of received message
* Decrypt signature using public key
* Compare both hashes
> If equal → signature is valid
---
## Properties of Digital Signatures
### Authentication
* Confirms the **identity of the sender**
* Only the sender possesses the private key
---
### Integrity
* Ensures message is **not modified**
* Any change results in a **different hash**
---
### Non-Repudiation
* Sender **cannot deny** sending the message
* Signature is created using their private key
---
### Unforgeability
* Attackers cannot create valid signatures without the **private key**
---
### Public Verifiability
* Anyone with the **public key** can verify the signature
* Enables scalable and transparent verification
---
### Dependence on Hash Functions
* Uses secure hash functions like **SHA-256**
* Prevents:
  * Collisions
  * Duplicate digests for different messages
---
## Applications
Digital signatures are used in:
* **Secure email systems**
* **Software distribution and updates**
* **SSL/TLS certificates**
* **Blockchain systems**
* **Electronic transactions**
