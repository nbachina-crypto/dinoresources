**Data carving** is a forensic data recovery technique used to extract files or fragments of data directly from raw storage media without depending on the file system structure.
It is mainly used when file system metadata such as **directory entries**, **FAT**, or **MFT records** are **missing, corrupted, or deleted**.
Instead of using file names and directory paths, data carving searches the **disk image** or raw sectors for known file signatures.
These signatures are unique byte patterns called:
* **headers** – identify the beginning of a file
* **footers** – identify the end of a file
### Common File Signatures
| File Type | Header / Footer                         |
| --------- | --------------------------------------- |
| **JPEG**  | Begins with `FFD8` and ends with `FFD9` |
| **PDF**   | Starts with `%PDF`                      |
---
## Carving Process
```text id="57241"
load disk image
scan raw sectors
identify file header
locate footer or estimate size
extract file content
verify recovered data
```
The technique reads:
* **unallocated space**
* **slack space**
* **deleted sectors**
to locate remnants of files that are no longer visible in the file system.
---
## Types of Data Carving
There are two main approaches:
| Method                    | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| **Header-footer carving** | Uses both start and end signatures of known file types |
| **Header-size carving**   | Uses the header and file size when footer is missing   |
---
## Uses in Forensic Investigation
**Data carving** is especially useful for recovering deleted files after:
* **accidental deletion**
* **intentional deletion**
* **disk formatting**
* **partial disk corruption**
Applications in forensic investigations include:
* **recovery of deleted documents**
* **recovery of images and videos**
* **restoration of evidence from damaged FAT or NTFS structures**
* **retrieval of hidden or partially overwritten files**
* **recovery of fragments from unallocated space**
* **supporting timeline reconstruction**
* **evidence correlation**
---
## Example
For example, if a user deletes an image and removes directory entries, the **JPEG data may still remain in unallocated sectors**.
Data carving can recover the image by identifying its **header (`FFD8`)** and **footer (`FFD9`)** signatures.
> **Data carving is highly useful when metadata is deleted but raw file data still exists on the disk.**