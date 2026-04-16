A public key cryptosystem uses two keys:
* **Public key** → shared with everyone
* **Private key** → kept secret
If a sender wants to send a secure message:
1. Encrypt using the receiver’s **public key**
2. Receiver decrypts using the **private key**
```text
Sender encrypts using public key
Receiver decrypts using private key
```
Even if others know the public key, they cannot read the message.
---
## Key Takeaways
* Uses **two different keys** for security
* Solves the **key distribution problem**
* Enables both **encryption** and **digital signatures**
* Common example: **RSA**
* Often combined with **AES** in real-world systems
