The **examination phase in mobile forensics** is the stage where the collected data from a mobile device is **systematically inspected to identify relevant digital evidence**.
This phase follows the **collection phase** and is performed on the **forensic copy**, not on the original device, to preserve **evidence integrity**.
The main purpose is to **extract, organize, and interpret useful information** from the acquired mobile data.
---
## Examination Workflow
```text id="58321"
load forensic copy
verify hash value
extract files and metadata
recover deleted data
analyze logs and timestamps
correlate evidence
prepare findings
```
First, the acquired **mobile image** or extracted data is loaded into forensic tools.
The **hash value** is verified to ensure that the data has **not been altered since collection**.
> **Examination must always be performed on the forensic copy to protect the original evidence.**
---
## Evidence Categories Examined
Investigators then examine different categories of evidence such as:
| Evidence Type             | Description                                   |
| ------------------------- | --------------------------------------------- |
| **Call logs**             | Incoming, outgoing, and missed calls          |
| **SMS and chat messages** | Messages from device memory and apps          |
| **Contacts**              | Stored numbers and account details            |
| **Photos and videos**     | Media files and metadata                      |
| **Browser history**       | Visited websites and searches                 |
| **Application data**      | WhatsApp, email, social media, and other apps |
| **Location records**      | GPS and app-based location data               |
| **System logs**           | Device events and usage records               |
| **Timestamps**            | Creation, modification, and access times      |
---
## Deleted Data Recovery
**Deleted files** and **deleted messages** are also examined using **data recovery techniques** from:
* **unallocated space**
* **hidden storage areas**
* **application databases**
This helps recover evidence that is no longer visible to the user.
---
## Timeline Reconstruction
A key part of this phase is **timeline reconstruction**, where timestamps from:
* **messages**
* **logs**
* **app data**
* **media files**
are arranged in **chronological order** to understand the sequence of events.
For example, investigators may correlate:
1. a **chat message timestamp**
2. a **location record**
3. a **call log**
to verify **user activity**.
This phase helps identify:
* **user actions**
* **communication history**
* **suspicious activities**