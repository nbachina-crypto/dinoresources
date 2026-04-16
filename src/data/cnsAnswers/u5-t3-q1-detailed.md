## Firewalls
A **firewall** is a network security system (hardware or software) that monitors and controls **incoming and outgoing traffic** based on predefined rules.
> It acts as a **barrier between trusted and untrusted networks**.
---
## Types of Firewalls
### 1. Packet Filtering Firewall
* Operates at the **network layer**
* Filters packets based on: Source IP, Destination IP, Port numbers, Protocol
## Working
* Each packet is checked against rules
* Allowed or blocked accordingly
## Example
* Allow port `80` (HTTP)
* Block port `23` (Telnet)
> **Limitation:** Cannot track connection state or detect complex attacks.
---
### 2. Stateful Inspection Firewall
* Tracks the **state of active connections**
## Working
* Maintains a **state table** of active sessions
* Allows only packets belonging to valid sessions
## Example
* Allows response traffic only if it matches an existing request
> **Advantage:** More secure than packet filtering due to context awareness.
---
### 3. Application-Level Gateway (Proxy Firewall)
* Operates at the **application layer**
* Acts as an **intermediary** between client and server
## Working
* Client connects to proxy
* Proxy forwards request to server
* Inspects application-level data
## Example
* Web proxy filtering malicious URLs
> **Advantage:** Deep inspection and strong security
> **Limitation:** Higher latency
---
### 4. Circuit-Level Gateway
* Operates at the **session layer**
## Working
* Monitors **TCP handshakes**
* Verifies connection legitimacy
* Does not inspect actual data
## Example
* Used where connection validation is sufficient
> **Advantage:** Faster than application-level firewalls
> **Limitation:** No content inspection
---
### 5. Next-Generation Firewall (NGFW)
* Advanced firewall with multiple integrated features: Deep Packet Inspection (DPI)
, Intrusion Detection/Prevention (`IDS/IPS`), Application awareness
## Working
* Analyzes traffic across multiple layers
* Identifies applications regardless of port
## Example
* Blocking malicious apps or unauthorized P2P traffic
> **Advantage:** High security with comprehensive protection
---
### 6. Host-Based Firewall
* Installed on **individual systems**
## Working
* Controls traffic for that specific device
## Example
* Windows Defender Firewall
> **Advantage:** Protects endpoints directly
---
### 7. Network-Based Firewall
* Deployed at **network boundaries**
## Example
* Firewall between internal network and internet
> **Advantage:** Centralized control and protection
