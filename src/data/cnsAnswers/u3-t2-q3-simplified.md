The security of **RSA** depends on how hard it is to factor a large number into its prime factors.
* If attackers cannot break **n into p and q**, they cannot find the private key
* Large keys (e.g., 2048 bits) make RSA secure
---
### Key Points
* Small keys → easily breakable
* No padding → predictable ciphertext
* Padding (e.g., **OAEP**) → improves security
* Side-channel attacks → exploit implementation flaws
* Strong randomness → essential for key generation
> RSA is secure only when implemented correctly and combined with proper techniques like padding and hashing.
