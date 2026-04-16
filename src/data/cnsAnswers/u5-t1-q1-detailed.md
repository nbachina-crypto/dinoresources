## SSL and TLS
**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** are cryptographic protocols used to provide **secure communication over networks**.
* **TLS** is the modern and more secure successor of SSL
---
## Architecture
SSL/TLS operates between:
* **Application layer** (e.g., HTTP)
* **Transport layer** (TCP)
It consists of:
* **Record Protocol**
* **Handshake Protocol**
* **Change Cipher Spec Protocol**
* **Alert Protocol**
---
## 1. Record Protocol
The **Record Protocol** handles actual data transmission and provides:
* **Confidentiality**
* **Integrity**
---
### Working
```text
step 1: Fragment application data into blocks
step 2: (Optional) Compress data
step 3: Compute MAC for integrity
step 4: Encrypt data using symmetric key (e.g., AES)
step 5: Append header and transmit
```
---
### Functions
* **Confidentiality** → symmetric encryption (AES)
* **Integrity** → MAC (e.g., HMAC)
* Efficient secure data transfer after session setup
---
## 2. Handshake Protocol
The **Handshake Protocol** establishes a secure session between client and server.
---
### Working
```text
step 1: ClientHello (supported versions, cipher suites, random value)
step 2: ServerHello (selected version, cipher suite, certificate)
step 3: Server authentication using X.509 certificate
step 4: Key exchange (RSA or Diffie-Hellman)
step 5: Both derive shared session key
step 6: Finished messages exchanged
```
---
### Key Outcomes
* Authentication of server
* Agreement on encryption algorithms
* Generation of **shared session keys**
> After handshake, **symmetric encryption** is used for efficiency.
---
## 3. Change Cipher Spec Protocol
* Signals that subsequent messages will use:Negotiated keys and Selected algorithms
> Marks the transition to **secure communication**
---
## 4. Alert Protocol
* Used to send: **Error messages**, **Warnings**, **Connection status**
---
## Key Features
### Authentication
* Server authentication via **X.509 certificates**
* Client authentication is optional
---
### Confidentiality
* Data encrypted using symmetric algorithms like **AES**
---
### Integrity
* Ensured using: MAC and Authenticated encryption modes
---
### Key Exchange
* Uses asymmetric cryptography: **RSA** and **Diffie–Hellman**
---
### Session Management
* After handshake, a session is established
* Sessions can be **reused** for efficiency
---
## Example: HTTPS
* Browser (client) connects to web server
* Handshake establishes secure keys
* Data is encrypted using session keys
> This enables **secure web communication**
---
## SSL vs TLS

| Feature    | SSL        | TLS                        |
| ---------- | ---------- | -------------------------- |
| Status     | Obsolete   | Modern standard            |
| Security   | Vulnerable | Stronger security          |
| Algorithms | Older      | Improved and secure        |
| Usage      | Deprecated | Widely used (TLS 1.2, 1.3) |
