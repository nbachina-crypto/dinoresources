In **mobile forensics**, **malware and security considerations** are important because they directly affect the **integrity, availability, and interpretation of digital evidence**.
Mobile devices often contain **applications, communication data, and system logs** that may be altered by malicious software. Therefore, investigators must carefully distinguish between **normal user activity** and **malware-generated actions**.
---
## Malware in Mobile Forensics
**Mobile malware** refers to malicious software that infects smartphones or tablets to perform unauthorized actions.
Common forms include:
* **spyware**
* **trojans**
* **ransomware**
* **keyloggers**
* **malicious apps disguised as legitimate applications**
### Possible Malware Actions
Such malware may:
* **steal messages and contacts**
* **record calls or microphone input**
* **track location**
* **send unauthorized SMS**
* **delete or hide files**
* **modify system logs**
From a forensic perspective, malware analysis helps determine whether suspicious actions were performed by the **user** or by **malicious code**.
### Areas Examined
Investigators examine:
* **installed applications**
* **application permissions**
* **background processes**
* **network logs**
* **SMS and call activity**
* **system event logs**
* **timestamps**
---
## Security Considerations
The main security consideration is **preserving evidence without altering the device state**.
### Key Security Steps
```text id="39285"
isolate device from network
prevent remote access or wipe
create forensic image
verify hash value
analyze on copied data
maintain chain of custody
```
**Network isolation** is especially important because compromised devices may be:
* **remotely controlled**
* **automatically synchronized with cloud services**
* **remotely wiped**
Keeping the device connected may lead to **data modification** or **evidence loss**.
> **Always isolate the device from Wi-Fi, mobile data, and Bluetooth before acquisition.**
---
## Additional Checks
Investigators also check for:
| Check                          | Purpose                                        |
| ------------------------------ | ---------------------------------------------- |
| **Rooted / jailbroken status** | May indicate tampering or privilege escalation |
| **Unauthorized apps**          | Detect suspicious installations                |
| **Encrypted storage**          | May require secure acquisition methods         |
| **Log integrity**              | Check whether malware manipulated logs         |
**Memory analysis** and **log analysis** are also useful for identifying:
* **running malicious processes**
* **abnormal system behavior**
* **hidden malware activity**
These considerations ensure **accurate evidence recovery** and help determine whether the device was **compromised**.