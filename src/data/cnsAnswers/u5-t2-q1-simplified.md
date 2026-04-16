
S/MIME secures email using:
* **Encryption** → keeps message private
* **Digital signature** → verifies sender
---
## Basic Process
* Encrypt message using a **secret key**
* Encrypt the key using **receiver’s public key**
* Sign message using **sender’s private key**
---
## Receiver Actions
* Decrypt key using private key
* Decrypt message
* Verify signature using sender’s public key
---
> **Key Idea:** S/MIME ensures secure email communication by combining **encryption and digital signatures**, backed by trusted certificates.
