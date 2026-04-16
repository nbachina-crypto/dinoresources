## Public Key Cryptosystem
A **public key cryptosystem** is an *asymmetric encryption system* that uses two mathematically related keys: a **public key** and a **private key**. The public key is shared openly, while the private key is kept secret by the owner.
The core principle is that data encrypted with one key can only be decrypted with the corresponding other key. This eliminates the need to share a secret key beforehand.
---
## Key Concepts
* **Public Key (PU)**: Shared openly with others
* **Private Key (PR)**: Kept secret by the owner
* **Asymmetric Cryptography**: Uses different keys for encryption and decryption
* **Confidentiality**: Only the intended receiver can read the message
> The security relies on keeping the private key confidential.
---
## Working Stages
A public key cryptosystem operates in three main stages:
### 1. Key Generation
* Generate a **public key (PU)**
* Generate a **private key (PR)**
* Public key is distributed, private key is securely stored
### 2. Encryption
* Sender encrypts plaintext using receiver’s **public key**
* Produces ciphertext
### 3. Decryption
* Receiver decrypts ciphertext using **private key**
* Retrieves original plaintext
```text
Key Generation:
Generate public key (PU)
Generate private key (PR)

Encryption:
Ciphertext C = E(PU, P)
Decryption:
Plaintext P = D(PR, C)
```
---
## Security Basis
The security of a public key cryptosystem depends on a **trapdoor one-way function**.
* Easy to compute in one direction (encryption)
* Hard to reverse without the private key
* Private key acts as the *trapdoor* for efficient decryption
---
## Example: RSA
**RSA** is a widely used public key cryptosystem.
* Public key is used for encryption
* Private key is used for decryption
* Security is based on the difficulty of factoring large integers
If a user publishes their public key:
* Anyone can send encrypted messages
* Only the private key holder can decrypt them
---
## Digital Signatures
Public key cryptosystems also support **digital signatures**.
* Sender signs message using **private key**
* Receiver verifies using **public key**
This ensures:
* **Authentication**: Verifies sender identity
* **Integrity**: Message is not altered
* **Non-repudiation**: Sender cannot deny sending
---
## Comparison with Symmetric Cryptography
| Feature          | Public Key Cryptography          | Symmetric Cryptography               |
| ---------------- | -------------------------------- | ------------------------------------ |
| Keys Used        | Two (Public + Private)           | One shared key                       |
| Key Distribution | Easy (no secret exchange needed) | Difficult (secure exchange required) |
| Speed            | Slower                           | Faster                               |
| Example          | RSA                              | AES                                  |
---
## Practical Usage
In real systems like **SSL/TLS**:
* Public key cryptography is used for:
  * Secure **key exchange**
  * **Authentication**
* Symmetric algorithms like **AES** are used for:
  * Fast **data encryption**
> Public key systems are computationally expensive, so they are combined with symmetric encryption for efficiency.
