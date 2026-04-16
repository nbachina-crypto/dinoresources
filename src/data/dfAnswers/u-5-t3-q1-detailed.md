### Introduction to Local Acquisition
**Local acquisition** is the process of collecting **digital evidence directly from a live system or storage media** at its original location, without removing the device.
It is typically used when:
* Immediate access to data is required
* Shutting down the system may result in loss of **volatile data**
> This method is critical when preserving real-time or transient evidence.
---
### Key Characteristics
* Performed on-site (at the scene)
* May involve a **running (live) system**
* Uses **trusted forensic tools**
* Focuses on both **volatile and non-volatile data**
---
### Types of Local Acquisition
## Live Acquisition
**Live acquisition** is performed while the system is **powered on**.
Targets **volatile data** such as:
* RAM contents
* Running processes
* Open network connections
* Active user sessions
Common tools:
* **FTK Imager Lite**
* **Volatility**
* **DumpIt**
> Essential in cases involving malware, encryption, or active attacks where shutdown would destroy evidence.
---
## Static Local Acquisition
**Static local acquisition** involves collecting data from storage while the system remains in place.
* Focuses on **non-volatile data** (hard disks, SSDs)
* Often uses **write blockers** to prevent modification
* Creates **bit-by-bit forensic images**
* Common tools: **dd**, **EnCase**
---
### Key Procedures
To ensure evidence integrity, investigators must:
1. Minimize system interaction to reduce data alteration
2. Use **forensic tools** only
3. Generate **hash values** (MD5, SHA) to verify integrity
4. Maintain detailed documentation for **chain of custody**
> Any interaction with a live system may modify data, so careful handling is required.
---
### Role in Digital Forensics
Local acquisition is widely used in:
* **Incident response**
* **Cyber attack investigations**
* Situations requiring **rapid evidence collection**
It allows investigators to capture critical data before:
* System shutdown
* Evidence loss
* Attacker interference
---
### Summary
* **Local acquisition** collects evidence directly from a system at its location
* Includes both **live** and **static** methods
* Focuses on preserving volatile and non-volatile data
* Requires strict procedures to maintain evidence integrity
