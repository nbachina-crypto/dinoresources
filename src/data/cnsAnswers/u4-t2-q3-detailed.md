## HMAC, DAA, and CMAC
**HMAC**, **DAA**, and **CMAC** are all methods used to generate a **Message Authentication Code (MAC)** for ensuring **data integrity** and **authentication**.
---
## HMAC (Hash-based Message Authentication Code)
**HMAC** is a type of MAC built using a **cryptographic hash function** such as `SHA-256` and a **secret key**.
It provides:
* **Data integrity**
* **Authentication**
---
### Working Principle
HMAC uses two padding constants:
* **ipad** → inner padding
* **opad** → outer padding
The key is adjusted to the block size of the hash function.
```text
HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M))
```
---
### Steps
```text
step 1: If key K is longer than block size, hash it
step 2: Pad K to block size
step 3: Compute inner hash = H((K ⊕ ipad) || M)
step 4: Compute outer hash = H((K ⊕ opad) || inner hash)
step 5: Output is HMAC
```
---
### Example (Conceptual)
Let:
* `K = "key"`
* `M = "data"`
Compute:
* Inner: `H((K ⊕ ipad) || "data")`
* Outer: `H((K ⊕ opad) || inner)`
The result is the final **HMAC**.
---
### Uses
HMAC is widely used in:
* **SSL/TLS**
* **IPsec**
* **APIs**
* **Secure communication protocols**
---
## DAA (Data Authentication Algorithm)
**DAA** is a MAC based on a **block cipher**, historically **DES**.
It uses **Cipher Block Chaining (CBC)** mode to generate a fixed-length authentication code.
---
### Working Principle
* Divide the message into blocks
* Start with an initial value `IV = 0`
* Process each block using chained encryption
* The final encrypted block becomes the MAC
---
### Steps
```text
step 1: Divide message into blocks M1, M2, ..., Mn
step 2: Set IV = 0
step 3: For each block:
        Ci = Encrypt(K, Mi ⊕ Ci−1)
step 4: Final block Cn is the MAC
```
---
### Example
For blocks `M1, M2, M3`:
```text
C1 = E(K, M1 ⊕ IV)
C2 = E(K, M2 ⊕ C1)
C3 = E(K, M3 ⊕ C2)
```
* `C3` is the final **MAC**
---
### Limitation
> DAA is considered **outdated** because it is based on **DES**, which is no longer secure.
---
## CMAC (Cipher-based Message Authentication Code)
**CMAC** is an improved and secure version of **CBC-MAC**.
It is designed for use with modern block ciphers such as **AES** and is secure for **variable-length messages**.
---
### Working Principle
CMAC generates **subkeys** and uses them in final block processing to remove weaknesses found in basic CBC-MAC.
---
### Steps
```text
step 1: Generate subkeys K1 and K2 from main key K
step 2: Divide message into blocks
step 3: If last block is complete, XOR with K1
        Else pad and XOR with K2
step 4: Apply CBC encryption over all blocks
step 5: Final output block is the MAC
```
---
### Example (Conceptual)
For message blocks `M1, M2, M3`:
If the last block is complete:
```text
M3' = M3 ⊕ K1
```
Then compute:
```text
C1 = E(K, M1 ⊕ IV)
C2 = E(K, M2 ⊕ C1)
C3 = E(K, M3' ⊕ C2)
```
* `C3` is the final **CMAC**
---
### Uses
CMAC is:
* **Standardized**
* Widely used with **AES**
* Suitable for **modern authentication systems**
---
## Comparison
| Method   | Based On                      | Security Level | Main Feature                        |
| -------- | ----------------------------- | -------------- | ----------------------------------- |
| **HMAC** | Hash functions                | High           | Flexible and widely used            |
| **DAA**  | `DES` block cipher            | Low / outdated | Historical MAC method               |
| **CMAC** | `AES` or modern block ciphers | High           | Secure for variable-length messages |
