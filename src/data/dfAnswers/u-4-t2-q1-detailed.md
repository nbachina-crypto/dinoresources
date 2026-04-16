**Mobile devices and embedded systems** are treated as **digital evidence** when they contain data that can help establish facts in an investigation.
They are handled as potential evidence sources because they store:
* **user activity**
* **communication records**
* **system logs**
* **timestamps**
that can be examined and presented in a **forensic report**.
For both device types, the forensic process follows the standard stages of:
1. **identification**
2. **collection**
3. **preservation**
4. **examination**
5. **analysis**
6. **reporting**
---
## Mobile Devices as Digital Evidence
**Mobile devices** such as smartphones and tablets are considered strong evidence sources because they store both **user-generated** and **system-generated data**.
### Typical Evidence
* **call logs**
* **SMS and chat messages**
* **contacts**
* **photos and videos**
* **browser history**
* **application data**
* **location records**
* **deleted files**
* **timestamps**
During handling, the device is first **identified and isolated** to prevent alteration of data, such as:
* **incoming calls**
* **new messages**
* **network synchronization**
A **forensic copy** or **logical / physical image** is then created.
The **original device is preserved**, and all analysis is performed on the copied data.
**Hashing** is used to verify integrity and maintain the **chain of custody**.
> **The original mobile device should never be directly analyzed if a forensic copy is available.**
---
## Embedded Systems as Digital Evidence
**Embedded systems** include devices such as:
* **CCTV units**
* **routers**
* **smart meters**
* **ATMs**
* **vehicle systems**
* **GPS units**
* **IoT devices**
These devices are treated as evidence because they store:
* **event logs**
* **access records**
* **firmware data**
* **usage history**
* **network logs**
* **timestamps**
Forensic acquisition may involve extracting:
* **internal storage**
* **memory chips**
* **removable media**
* **log exports**
Investigators preserve the **device state** and collect all relevant system data without modifying the original contents.
Their importance lies in recording **device operations and user interactions**, which helps in **timeline reconstruction**.
---
## Evidence Workflow
```text id="76392"
identify device
secure and isolate device
create forensic copy
generate hash value
analyze logs and data
document chain of custody
report findings
```
Both mobile devices and embedded systems are treated carefully because even **small changes may affect evidential value and legal admissibility**.