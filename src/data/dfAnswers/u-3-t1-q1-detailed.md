**Data acquisition in digital forensics** is the process of collecting digital evidence from a device or storage medium in a way that preserves its originality and admissibility. It is one of the most critical stages in the forensic process because any improper handling can alter the evidence and reduce its legal value.
The primary objective of **data acquisition** is to obtain an exact copy of the original data source without modifying the source itself. This may involve acquiring data from **hard disks, SSDs, USB drives, memory cards, mobile devices, or system memory**, depending on the case.
A **forensic copy**, also called a **forensic image** or **bit-by-bit copy**, is an exact duplicate of the entire storage media. Unlike a normal file copy, it includes all sectors of the disk, such as:
* **active files**
* **deleted files**
* **slack space**
* **unallocated space**
* **file system metadata**
This makes it possible to recover deleted data and reconstruct user activity.
### Acquisition Process
The acquisition process generally follows these steps:
```text
identify evidence source
connect write blocker
create bit-by-bit image
generate hash value
verify image integrity
secure original evidence
```
During acquisition, investigators commonly use a **write blocker** to prevent any write operation to the original storage device. This ensures preservation of evidence.
The forensic copy is created as a **sector-level image** of the disk. Common image formats include **raw image formats** and **tool-specific formats**. The copied image must contain all information from the original disk, including hidden and deleted data.
### Hash Verification
**Hashing** is then performed using algorithms such as **MD5** or **SHA** to generate a unique **hash value** for both the original device and the forensic image.

| Item                           | Purpose                      |
| ------------------------------ | ---------------------------- |
| **MD5 / SHA hash of original** | Identifies original evidence |
| **MD5 / SHA hash of image**    | Verifies copied evidence     |
If both hash values match, it proves that the copy is exact and has not been altered.
> Matching hash values confirm the integrity and authenticity of the forensic image.
### Example
If a suspect’s hard drive contains deleted documents, a normal copy may miss them, but a **forensic copy preserves deleted sectors and unallocated space**, allowing data recovery during analysis.
The **original device** is preserved as primary evidence, while all examination and analysis are performed only on the forensic copy. This supports **evidence integrity** and maintains the **chain of custody**.