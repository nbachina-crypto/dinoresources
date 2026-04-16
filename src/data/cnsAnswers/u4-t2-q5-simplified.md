DSS is a standard for **digital signatures** using the **DSA algorithm**.
---
## Basic Steps
* Hash the message
* Use private key + random number `k` to create signature `(r, s)`
* Receiver verifies using the public key
---
## Key Points
* Uses **SHA** for hashing
* Requires **random value `k`** for each signature
* Provides:**Authentication**, **Integrity**, **Non-repudiation**
* Does NOT encrypt the message
---
> **Key Idea:** DSS standardizes secure digital signatures using DSA, ensuring reliable authentication while relying on strong randomness and the hardness of discrete logarithms.
