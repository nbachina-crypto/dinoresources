## Firewall Configuration
**Firewall configuration** is the process of defining **rules and policies** that control network traffic between **trusted and untrusted networks**.
> Proper configuration ensures **security** while allowing legitimate communication.
---
## Basic Configuration Components
### Rule Base (Access Control List)
Firewalls use rules to **permit or deny traffic** based on:
* Source IP
* Destination IP
* Port number
* Protocol
```text
Rule format:
(Source IP, Destination IP, Port, Protocol, Action)
```
## Examples
* Allow HTTP:
```text
(Any, Server_IP, Port 80, TCP, Allow)
```
* Deny Telnet:
```text
(Any, Any, Port 23, TCP, Deny)
```
> Rules are processed **top-down**, and the **first match is applied**.
---
### Default Policy
* Applied when no rule matches
* Typically set to:
* **Deny all** (most secure)
---
### Network Zones
Firewalls divide networks into zones:
* **Internal** → trusted
* **External** → untrusted
* **DMZ** → semi-trusted (public servers)
## Example
* Allow external access to DMZ web server
* Block access to internal network
---
### NAT (Network Address Translation)
* Hides internal IP addresses
### Types
* **Static NAT** → one-to-one mapping
* **Dynamic NAT** → uses address pool
* **PAT** → multiple devices share one IP
## Example
```text
192.168.1.10 → 203.0.113.5
```
---
### Stateful Configuration
* Tracks **active connections** using a state table
## Example
* Internal user sends request
* Response traffic is automatically allowed
---
### Application Filtering
* Controls access to specific applications/services
## Example
* Allow: HTTP (80), HTTPS (443)
* Block: FTP
---
### Logging and Monitoring
* Records traffic activity for: Analysis and Auditing
## Example
* Log: Denied packets and Suspicious activity
---
### Intrusion Prevention Integration
* Advanced firewalls include **IDS/IPS**
## Function
* Detect and block **malicious traffic patterns**
---
## Example Configuration Scenario
```text
step 1: Define zones (Internal, DMZ, External)
step 2: Set default policy = deny
step 3: Allow internal → external (web access)
step 4: Allow external → DMZ (web server only)
step 5: Block external → internal
step 6: Enable NAT for internal users
step 7: Enable logging for all denied traffic
```
---
## Security Considerations
* **Principle of least privilege** → allow only required traffic
* Regularly update firewall rules
* Maintain proper rule ordering
* Prevent spoofing using filtering rules
