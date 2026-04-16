**File hashing** is a forensic technique used to generate a unique fixed-length digital value, called a **hash value**, for a file or storage image. This value acts like a **digital fingerprint** of the data.
Even a very small change in the file content produces a completely different hash.
### Common Hashing Algorithms
Common hashing algorithms used in digital forensics include:
* **MD5**
* **SHA-1**
* **SHA-256**
During evidence acquisition, investigators calculate the hash of the **original storage device** and the **forensic copy**.
Matching hash values confirm that the copied evidence is an **exact duplicate** and has **not been altered**.
---
## Hashing Workflow
```text id="41862"
acquire evidence
generate hash of original
create forensic copy
generate hash of copy
compare hash values
verify integrity
```
Hashing is important for:
* **evidence integrity**
* **chain of custody**
* **court admissibility**
It ensures that the evidence presented during examination and reporting is the **same as the evidence originally collected**.
> **If two hash values match, the evidence copy is considered authentic and unchanged.**
### Example
If the original disk image produces hash **A1B2C3**, the forensic image must produce the **same hash**.
If the values differ, it indicates:
* **modification**
* **corruption**
* **tampering**
---
## Filtering Techniques
**Filtering techniques** are used during forensic analysis to reduce large volumes of data and focus only on relevant evidence.
Since storage devices may contain thousands of files, filtering helps investigators quickly identify useful information.
### Common Filtering Methods
| Filter Type       | Purpose                                   |
| ----------------- | ----------------------------------------- |
| **File type**     | Documents, images, videos, executables    |
| **Date and time** | Files created or modified within a period |
| **Keyword**       | Search words in names or content          |
| **File size**     | Find unusually large or small files       |
| **Extension**     | `.txt`, `.jpg`, `.pdf`, `.exe`            |
| **Deleted files** | Show only recoverable deleted items       |
For example, in timeline analysis, files modified between **9:00 AM and 10:00 AM** can be filtered to investigate suspicious activity during that period.
Filtering improves:
* **analysis speed**
* **evidence identification**
* **timeline reconstruction**
* **data recovery**