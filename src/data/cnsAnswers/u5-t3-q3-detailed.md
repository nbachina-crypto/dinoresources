## IDS and IPS
**Intrusion Detection Systems (IDS)** and **Intrusion Prevention Systems (IPS)** are security mechanisms used to detect and respond to **malicious activities** in networks or systems.
---
## Intrusion Detection System (IDS)
An **IDS** monitors network or system activity to detect **suspicious behavior** or known attack patterns.
> It **detects and alerts**, but does not block attacks.
---
### Working Principle
```
step 1: Monitor network/system activity
step 2: Analyze data using signatures or behavior models
step 3: Detect suspicious activity
step 4: Generate alert to administrator
```
---
### Detection Techniques
* **Signature-based detection** → matches known attack patterns
* **Anomaly-based detection** → detects unusual behavior
---
### Types
* **Network-based IDS (NIDS)** → monitors network traffic
* **Host-based IDS (HIDS)** → monitors individual systems
---
### Example
* Detects repeated failed login attempts
* Generates alert for possible **brute-force attack**
---
### Limitation
> Does not prevent attacks, only reports them.
---
## Intrusion Prevention System (IPS)
An **IPS** extends IDS functionality by actively **blocking or preventing attacks in real time**.
---
### Working Principle
```
step 1: Inspect incoming/outgoing traffic
step 2: Analyze using detection techniques
step 3: Identify malicious activity
step 4: Block or drop packets
step 5: Log and alert
```
---
### Actions
* Drop malicious packets
* Block IP addresses
* Reset connections
---
### Types
* **Network-based IPS (NIPS)**
* **Host-based IPS (HIPS)**
---
### Example
* Detects exploit signature
* Immediately blocks malicious traffic
---
## Comparison: IDS vs IPS
| Feature         | IDS                   | IPS                                   |
| --------------- | --------------------- | ------------------------------------- |
| Purpose         | Detection only        | Detection + Prevention                |
| Deployment      | Out-of-band (passive) | Inline (active)                       |
| Response        | Alerts only           | Blocks/drops traffic                  |
| Traffic Impact  | No impact             | Slight latency                        |
| Security Level  | Reactive              | Proactive                             |
| False Positives | Lower risk            | Higher risk (may block valid traffic) |
