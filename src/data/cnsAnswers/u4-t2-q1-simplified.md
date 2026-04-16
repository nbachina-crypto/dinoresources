Message authentication ensures that:
* The message is **not changed**
* The sender is **verified**
* The message is **fresh**
* The sender cannot **deny sending it**
---
## Methods (Simplified)
* **Encryption** → protects message and partially verifies sender
* **MAC** → uses secret key for authentication
* **Hash** → checks integrity only
* **HMAC** → stronger (key + hash)
* **Digital Signature** → full security (authentication + non-repudiation)
---
> **Key Idea:** Message authentication combines techniques like hashing, keys, and signatures to ensure **secure, reliable, and trustworthy communication**.
