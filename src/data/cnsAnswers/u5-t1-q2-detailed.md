## SSL and TLS
**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** are cryptographic protocols used to provide **secure communication over a network**. TLS is the successor to SSL and offers enhanced security and performance.
---
## Evolution of SSL and TLS
* **SSL**:It was Developed by Netscape(Versions: **SSL 2.0**, **SSL 3.0**).But it is Now **deprecated** due to security vulnerabilities
* **TLS**:Was Developed by IETF(Versions: **TLS 1.0, 1.1, 1.2, 1.3**).It is Modern standard for secure communication
> SSL is no longer considered secure and should not be used.
---
## Key Differences Between SSL and TLS
| Feature         | SSL                   | TLS                 |
| --------------- | --------------------- | ------------------- |
| Security        | Weak, outdated        | Strong, modern      |
| Hash Functions  | MD5 (weak)            | SHA (secure)        |
| Cipher Suites   | Limited, insecure     | Advanced, secure    |
| Handshake       | Vulnerable to attacks | Secure and improved |
| Forward Secrecy | Not supported         | Supported           |
| Status          | Deprecated            | Actively used       |
---
## Cryptographic Improvements in TLS
TLS introduces several enhancements over SSL:
* Uses **stronger encryption algorithms**
* Replaces weak hash functions (e.g., MD5) with **SHA**
* Implements improved **key derivation functions**
* Uses **HMAC** for better integrity protection
---
## Handshake Protocol
### SSL Handshake
* Less secure negotiation
* Vulnerable to:Downgrade attacks and Man-in-the-middle attacks

### TLS Handshake
* More secure negotiation process
* Improved: Certificate verification and Protection against replay attacks
* **TLS 1.3**:Simplified handshake, Reduced latency, Removed insecure cipher suites
> TLS handshake ensures both confidentiality and authentication.
---
## Cipher Suites and Forward Secrecy
* **SSL**: Supports outdated cipher suites
* **TLS**: Supports modern, secure cipher suites and it Enables **forward secrecy** using: Ephemeral Diffie-Hellman
Forward secrecy ensures that even if a private key is compromised, past communications remain secure.
---
## Record Protocol
Both SSL and TLS use a record protocol to transmit data securely.
* **SSL**: Uses custom MAC construction
* **TLS**:  Uses **HMAC** for improved integrity and authentication
---
## Error Handling and Alerts
* **SSL**: Basic error handling
* **TLS**: Robust alert mechanisms
---
## Practical Usage
* **SSL**: Deprecated and insecure
* **TLS**: Used in **HTTPS** Secure web communication and Email and other network protocols
> All modern secure systems rely on TLS instead of SSL.
