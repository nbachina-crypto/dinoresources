### Introduction to Network Layered Models
**Computer networking** uses **layered abstraction models** to manage complexity, standardize communication, and ensure interoperability between different systems.
The two primary models are:
* **OSI Model (7 layers)**
* **TCP/IP Model (4 layers)**
Each layer performs specific functions and communicates with adjacent layers through well-defined interfaces.
> Data is **encapsulated** as it moves down the layers and **decapsulated** at the receiver.
---
### OSI Model (7 Layers)
### 1. Physical Layer
* Handles transmission of **raw bits** over a medium
* Defines voltage levels, cables, connectors
*Example:* Ethernet signals
---
### 2. Data Link Layer
* Provides **node-to-node communication**
* Handles framing, **MAC addressing**, and error detection (CRC)
* Operates through **switches**
*Example:* Ethernet frames
---
### 3. Network Layer
* Responsible for **logical addressing** and **routing**
* Determines the path of packets
*Example:* IP addressing, routers
---
### 4. Transport Layer
* Ensures **end-to-end communication**
* Handles segmentation, flow control, and reliability
* **TCP** → reliable (ACKs, retransmissions)
* **UDP** → faster, connectionless
---
### 5. Session Layer
* Manages **sessions** between applications
* Handles session setup, maintenance, and termination
---
### 6. Presentation Layer
* Handles **data representation**
* Performs encoding, encryption, and compression
*Example:* TLS encryption
---
### 7. Application Layer
* Provides interface for **user applications**
*Example:* HTTP, FTP, DNS
---
### TCP/IP Model (4 Layers)
The **TCP/IP model** is a practical implementation that combines some OSI layers.
| TCP/IP Layer          | Corresponding OSI Layers             |
| --------------------- | ------------------------------------ |
| **Network Interface** | Physical + Data Link                 |
| **Internet**          | Network                              |
| **Transport**         | Transport                            |
| **Application**       | Session + Presentation + Application |
---
### Encapsulation Process
Data moves through layers in a structured format:
1. Application data is created
2. Transport layer **segments** the data
3. Network layer adds **IP headers** (packet)
4. Data Link layer adds **MAC headers** (frame)
5. Physical layer transmits as **bits**
> This process is called **encapsulation**.
---
### Role in Digital Forensics
Understanding network layers is critical in **digital forensics** for analyzing network-based evidence.
* **Packet capture tools** (e.g., Wireshark) inspect traffic across layers
* **Transport layer** helps reconstruct sessions
* **Application layer** reveals data like HTTP requests
* **Network layer logs** (routers) help trace paths
* **Data Link layer logs** (switches) assist in source identification
> Layer-wise analysis enables accurate tracing of attacks and data breaches.
