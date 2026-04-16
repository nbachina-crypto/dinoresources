### HMAC
* Uses a **hash function** and a **secret key**
* Applies hashing **twice** with special padding
* Produces a secure authentication code
---
### DAA
* Uses an older block cipher like **DES**
* Processes message blocks one by one using chaining
* Final encrypted block becomes the MAC
---
### CMAC
* Improved version of **CBC-MAC**
* Uses modern block ciphers like **AES**
* Adds **subkeys** and **padding** for better security
---
## Summary
* **HMAC** uses **hash functions**
* **DAA** uses older **DES-based block cipher**
* **CMAC** uses modern **AES-based block cipher**
> **Key Idea:** HMAC is flexible and common, DAA is outdated, and CMAC is a secure modern MAC technique for block ciphers.
