
A **MAC** is a small value used to verify that a message is:
* **Authentic**
* **Unchanged**
---
## Process (Simplified)
* Sender:
  * Computes MAC using key + message
* Receiver:
  * Recomputes MAC and compares
> If both match → message is valid
---
## Key Points
* Uses a **secret key**
* Detects any **modification**
* Prevents **forgery**
* Efficient for practical use
---
> **Key Idea:** A MAC ensures **secure and authenticated communication**, but does not prove the sender’s identity uniquely due to shared key usage.
