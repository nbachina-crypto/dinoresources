**Timeline analysis in digital forensics** is the process of arranging **digital events in chronological order** to reconstruct what happened on a system or device over time. It helps investigators understand the **sequence of user actions, system activities, and possible malicious or unauthorized events**.
The analysis is mainly based on **timestamps** and **log files** collected from different sources such as:
* **files**
* **folders**
* **operating system logs**
* **browser history**
* **application logs**
* **file system metadata**
### Timestamp Fields Used
Typical timestamp fields used are:
| Timestamp                 | Meaning                           |
| ------------------------- | --------------------------------- |
| **Created time**          | When the file was first created   |
| **Modified time**         | When the content was last changed |
| **Accessed time**         | When the file was last opened     |
| **Metadata changed time** | When file attributes were altered |
In file systems such as **NTFS**, these timestamps are stored in the **Master File Table (MFT)**. In **FAT**, date and time details are stored in **directory entries**. Investigators extract these values and arrange them in chronological order.
---
## Workflow
```text id="81479"
collect logs and timestamps
extract file metadata
sort events by time
correlate related activities
reconstruct incident sequence
report findings
```
Timeline analysis also includes examining:
* **system event logs**
* **login records**
* **USB connection history**
* **deleted file timestamps**
* **application usage logs**
By correlating these events, investigators can reconstruct the **complete sequence of actions**.
---
## Example Sequence
For example, timeline analysis can show:
1. **USB drive connected** at **10:05 AM**
2. **File copied** at **10:07 AM**
3. **File deleted** at **10:10 AM**
4. **System shutdown** at **10:15 AM**
This chronological reconstruction helps identify **who did what and when**.
> **Timeline analysis is essential for reconstructing incidents and proving the order of events.**
---
## Importance
Its importance lies in:
* **incident reconstruction**
* **user activity tracking**
* **evidence correlation**
* **suspicious behavior detection**
* **statement verification**
It helps establish the **exact order of events** and supports **legal evidence**.
It is especially useful in cases involving:
* **deleted files**
* **unauthorized access**
* **data theft**
* **insider misuse**