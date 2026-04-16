### Basic Idea of Layers
Computer networking uses **layers** to break communication into manageable parts. Each layer has a specific job.
---
### Main Layers (Simplified)
* **Physical** – Sends raw signals
* **Data Link** – Transfers data within a network using MAC addresses
* **Network** – Routes data using IP addresses
* **Transport** – Ensures correct delivery (TCP reliable, UDP faster)
* **Application** – User-level services (web, email, DNS)
---
### Data Flow
* Data moves **down the layers** when sending
* Data moves **up the layers** when receiving
---
### Forensics Use
In **network forensics**:
* Tools like **Wireshark** analyze packets
* Investigators can see:
  * IP addresses
  * Protocols
  * Web requests
> This helps trace attacks and detect data leaks.
