The **collection phase in mobile forensics** is the stage in which **digital evidence is acquired from a mobile device in a controlled manner while preserving its originality and evidential value**.
It comes after **identification** and is one of the most critical steps because improper collection may **alter or destroy evidence**.
The main objective is to obtain all relevant data from the device **without modifying the original contents**.
---
## Collection Process
```text id="34718"
identify device
isolate from network
document device condition
acquire forensic copy
generate hash value
preserve original device
maintain chain of custody
```
First, the mobile device is **identified and documented**.
Details such as the following are recorded:
* **device model**
* **IMEI number**
* **SIM card information**
* **battery status**
* **date and time settings**
* **visible screen state**
---
## Device Isolation
The device is then **isolated from communication networks** to prevent:
* **incoming calls**
* **new messages**
* **cloud synchronization**
* **remote wiping**
This is commonly done using:
* **airplane mode**
* **Faraday bag**
* **disabling network connections**
> **Network isolation is essential to prevent evidence from being modified remotely.**
---
## Types of Acquisition
After isolation, the evidence is collected using forensic acquisition methods.
### Common Collection Types
| Acquisition Type            | Purpose                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| **Logical acquisition**     | Collects accessible data such as contacts, messages, call logs, photos, app data, and file contents |
| **Physical acquisition**    | Creates a complete bit-level copy including deleted files, unallocated space, and hidden data       |
| **File system acquisition** | Captures directory structure, metadata, and application data                                        |
During collection, specialized **mobile forensic tools** are used to extract data from:
* **internal storage**
* **SIM cards**
* **external memory cards**
---
## Integrity Verification
A **hash value** is then generated for the extracted data to verify integrity.
This ensures that the collected evidence remains **unchanged during examination and reporting**.
The **original device is preserved as primary evidence**, and all further analysis is performed on the **forensic copy**.
This phase is essential for:
* **evidence integrity**
* **deleted data recovery**
* **maintaining chain of custody**