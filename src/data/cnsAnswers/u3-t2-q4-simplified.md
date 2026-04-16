## Simplified Explanation
Diffie-Hellman allows two users to create a **shared secret key** over a public network.
### Process
```text 
Each user:
Generate public value using private key
Exchange public values
Compute shared key using received value
```
* Even though exchanged values are visible, the final key remains secure
---
### Simple Example
* p = 23, g = 5
* A chooses 6 → sends 8
* B chooses 15 → sends 19
Both compute:
* **Shared key = 2**
> This shared key is then used for encryption in secure communication.
