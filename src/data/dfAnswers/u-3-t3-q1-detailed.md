**Memory analysis in digital forensics** is the process of examining **volatile memory (RAM)** to recover information that exists only while the system is powered on.
Unlike disk data, **RAM contents are temporary** and are lost when the device is shut down. Therefore, memory analysis is important for capturing:
* **active processes**
* **open files**
* **running applications**
* **network connections**
* **temporary data**
It is mainly used to identify **live system activity** that may not yet be written to the disk, making it highly valuable in forensic investigations.
---
## Main Phases
The two main phases are:
1. **Collection**
2. **Examination**
---
## Collection Phase
This phase involves acquiring a **memory image** or **RAM dump** from a live system before shutdown.
Since RAM is volatile, this step must be performed **immediately after identification of the device**.
### Collection Process
```text id="24861"
identify live system
capture RAM image
generate hash value
preserve memory dump
document chain of custody
```
Specialized forensic tools such as:
* **Volatility-compatible dump tools**
* **FTK Imager**
* **memory acquisition tools**
are used to create a **complete copy of RAM**.
After collection, a **hash value** is generated to ensure integrity and verify that the memory dump remains unchanged during analysis.
> **RAM must be collected before shutdown because all data is lost once power is removed.**
---
## Examination Phase
In this phase, the acquired **memory image** is analyzed to extract useful evidence.
Investigators examine:
| Area                                     | Purpose                               |
| ---------------------------------------- | ------------------------------------- |
| **Running processes**                    | Active programs and background tasks  |
| **Open network connections**             | Current sessions and IP communication |
| **Loaded DLLs and drivers**              | Active modules in memory              |
| **Clipboard and temporary data**         | Unsaved user content                  |
| **User credentials / session artifacts** | Login remnants and tokens             |
| **Timestamps and process activity**      | Timeline reconstruction               |
This phase helps reconstruct the **system state at the exact time of acquisition**.
---
## Example
For example, if a suspicious program was running but later deleted from disk, it may still be visible in the **RAM image** during examination.
This makes memory analysis extremely useful for detecting:
* **malware**
* **live sessions**
* **unauthorized access**
* **temporary evidence**
Memory analysis is important because it provides evidence that **cannot be obtained from disk imaging alone**.