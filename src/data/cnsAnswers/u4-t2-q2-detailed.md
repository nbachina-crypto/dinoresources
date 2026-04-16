## Message Authentication Code (MAC)
A **Message Authentication Code (MAC)** is a cryptographic mechanism used to ensure:
* **Data integrity**
* **Source authentication**
It produces a fixed-size **tag** using a **message** and a **shared secret key**.
---
## Definition
```
MAC = F(K, M)
```
* `K` → secret key
* `M` → message
* `F` → cryptographic function
---
## Working Principle
### Sender
```
MAC = F(K, M)
Send (M, MAC)
```
### Receiver
```
Compute MAC' = F(K, M)
If MAC' = MAC → accept
Else → reject
```
> If both values match, the message is **authentic and unaltered**.
---
## Types of MAC
### Block Cipher-based MAC
* Example: **CBC-MAC**
---
### Hash-based MAC
* Example: **HMAC**
* Uses hash functions like **SHA-256**
---
## Requirements of MAC
### Data Integrity
* Any change in the message must produce a **different MAC**
* Even small changes should be detectable
---
### Key Dependence
* MAC must depend on a **secret key**
* Without `K`, generating a valid MAC should be infeasible
---
### Collision Resistance
* It should be hard to find:
```
F(K, M1) = F(K, M2)
```
for different messages `M1` and `M2`
---
### Forgery Resistance
* Attackers should not be able to create valid `(M, MAC)` pairs
* Even if they observe multiple valid messages
---
### Efficiency
* Computation should be **fast** and suitable for real-time systems
---
### Uniform Output
* Output should appear **random**
* Prevents statistical attacks
---
### Replay Protection (External)
* MAC alone does not prevent replay attacks
* Combined with:**Nonces** and **Sequence numbers**
---
## Example
Let:
* `K` → secret key
* `M = "HELLO"`
```
MAC = H(K || M)
```
* Sender sends `(HELLO, MAC)`
* Receiver recomputes and verifies
---
## Limitations
* Provides:**Integrity** and **Authentication**
* Does NOT provide: **Non-repudiation**
> Since both sender and receiver share the same key, the sender can deny sending the message.
