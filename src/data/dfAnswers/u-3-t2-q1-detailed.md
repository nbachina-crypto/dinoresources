**Disk structures** refer to the **physical and logical organization of data** on a storage device. In forensic investigations, understanding disk structure is essential for **locating files, recovering deleted data, and reconstructing user activity**.
A disk is divided into **sectors** and **clusters**.
* **Sector** – the smallest physical storage unit
* **Cluster** – a group of sectors used by the file system to store data
The disk also contains important structural areas such as the **boot sector**, **partition table**, **file allocation information**, and **data regions**.
### Disk Structure Components
```text id="16354"
boot sector / master boot record
partition table
file system metadata
data area
unallocated space
slack space
```
### Boot Sector and MBR
The **boot sector** or **Master Boot Record (MBR)** stores information about:
* **disk partitions**
* **startup instructions**
* **partition layout**
Investigators examine this area to identify partition layout and detect **hidden or deleted partitions**.
---
## File System Analysis
**File system analysis** is the process of examining how files and directories are **stored, organized, modified, and deleted** within file systems such as **FAT** and **NTFS**.
### FAT File System
In **FAT (File Allocation Table)**, the system uses a table to track which clusters belong to each file.
During forensic analysis, **FAT entries** help identify:
* **file locations**
* **deleted files**
* **fragmented data**
Deleted files may still exist in **unallocated clusters** until they are overwritten.
### NTFS File System
In **NTFS (New Technology File System)**, file information is stored in the **Master File Table (MFT)**.
Each file and folder has an **MFT record** containing metadata such as:
* **filename**
* **timestamps**
* **permissions**
* **size**
* **storage location**
This is highly useful for **forensic timeline reconstruction**.
---
## Important Areas Examined
| Area                  | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| **Metadata**          | File name, size, creation, modification, and access times       |
| **Directory entries** | File paths and folder structure                                 |
| **Unallocated space** | Deleted but recoverable data                                    |
| **Slack space**       | Unused bytes within clusters that may contain old data remnants |
Investigators use this analysis to:
* **recover deleted files**
* **detect hidden data**
* **verify user actions**
* **reconstruct events using timestamps and logs**
> **Slack space and unallocated space often contain valuable remnants of deleted evidence.**
---
## Example
For example, if a user deletes a document from an **NTFS volume**, the **MFT record may still remain**, allowing recovery of:
* **filename**
* **timestamps**
* **sometimes the file content**
This helps investigators reconstruct what happened on the system.