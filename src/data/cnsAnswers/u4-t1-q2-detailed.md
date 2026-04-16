## Secure Hash Algorithm (SHA)
The **Secure Hash Algorithm (SHA)** is a family of **cryptographic hash functions** that generate a fixed-length **hash (digest)** from an input message.
* A widely used version is **SHA-256**, which produces a **256-bit output**
---
## Working Principle (SHA-256)
### 1. Preprocessing
The input message is prepared before processing.
* **Padding:** Add a single `1` bit, Add `0` bits until length ≡ **448 mod 512**
* **Length Appending: **Append original message length as a **64-bit value**
> Final message length becomes a multiple of **512 bits**
---
### 2. Message Parsing
* The padded message is divided into **512-bit blocks**
* Each block is split into: **16 words**, each of **32 bits**
---
### 3. Initialization
Eight 32-bit initial hash values are defined:
```
H0, H1, H2, H3, H4, H5, H6, H7
```
* These are **fixed constants**
---
### 4. Message Schedule
Each block is expanded into **64 words** using bitwise operations:
```
For t = 16 to 63:
W[t] = σ1(W[t−2]) + W[t−7] + σ0(W[t−15]) + W[t−16]
```
* Uses **shifts** and **rotations**
---
### 5. Compression Function
* Each block undergoes **64 rounds**
* Working variables:
```
a, b, c, d, e, f, g, h
```
* Logical functions used: **Ch(x, y, z)** (choice) , **Maj(x, y, z)** (majority)
### Round Computation
```
T1 = h + Σ1(e) + Ch(e,f,g) + K[t] + W[t]
T2 = Σ0(a) + Maj(a,b,c)
```
### Variable Update
```
h = g
g = f
f = e
e = d + T1
d = c
c = b
b = a
a = T1 + T2
```
---
### 6. Hash Update
After processing each block:
```
H0 = H0 + a
H1 = H1 + b
...
H7 = H7 + h
```
---
### 7. Final Output
The final hash is:
```
H0 || H1 || H2 || H3 || H4 || H5 || H6 || H7
```
* Produces a **256-bit hash**
---
## Properties
* **Deterministic** → same input gives same hash
* **Collision-resistant** → hard to find two inputs with same hash
* **Avalanche effect** → small change → completely different hash
---
## Example (Conceptual)
* Input: `"abc"`
* Output (SHA-256):
```text id="x7w2b1"
ba7816bf...
```
> Output is always a **fixed 256-bit value**
---
## Applications
SHA is used in:
* **Digital signatures**
* **Data integrity verification**
* **Password hashing**
* **Blockchain systems**
