A digital signature proves that:
* The message is from the **correct sender**
* The message has **not been changed**
---
## Basic Steps
* Hash the message
* Encrypt the hash with **private key** → signature
* Receiver decrypts using **public key**
* Compare hashes
---
## Key Points
* **Authentication** → verifies sender
* **Integrity** → ensures no modification
* **Non-repudiation** → sender cannot deny
* **Unforgeability** → cannot be faked
---
> **Key Idea:** Digital signatures combine hashing and public key cryptography to provide **secure, verifiable, and tamper-proof communication**.
