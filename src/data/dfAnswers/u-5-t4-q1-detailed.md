In **network forensics**, the **examination** and **analysis** phases are carried out after network data has been acquired.
These phases focus on **inspecting collected network evidence** and **interpreting it** to reconstruct events, identify suspicious activity, and support investigation findings.
---
## Examination Phase
The **examination phase** is the **systematic inspection of acquired network evidence** such as:
* **packet captures**
* **log files**
* **router logs**
* **firewall records**
* **DNS logs**
* **server access records**
The main objective is to **extract relevant data** from the collected evidence **without altering its integrity**.
### Examination Workflow
```text id="61247"
verify evidence integrity
load packet capture and logs
extract headers and metadata
identify communication sessions
filter relevant traffic
organize events by timestamp
```
### Important Fields Examined
Investigators examine important fields such as:
* **source IP address**
* **destination IP address**
* **port numbers**
* **protocol type**
* **timestamps**
* **packet size**
* **session identifiers**
They also inspect protocol headers such as:
* **TCP**
* **UDP**
* **IP**
* **HTTP**
* **DNS**
to understand how communication occurred.
### Traffic Filtering
Traffic filtering is an important part of examination.
Investigators may filter by:
* **specific IP addresses**
* **port numbers**
* **protocols**
* **time ranges**
to reduce irrelevant data.
---
## Analysis Phase
The **analysis phase** interprets the examined data to determine **what actually happened on the network**.
This includes:
* **timeline reconstruction** – arranging events in time order
* **session reconstruction** – rebuilding complete communication sessions
* **source tracing** – identifying origin and destination systems
* **pattern analysis** – detecting unusual traffic behavior
* **log correlation** – matching packets with log files
### Analysis Workflow
```text id="25834"
correlate packets and logs
reconstruct communication timeline
trace source and destination
identify suspicious events
derive findings
prepare report
```
For example, investigators may analyze logs and packet data to determine that a system **connected to a specific IP at a particular time and transferred data**.
> **The analysis phase converts raw packet and log data into meaningful forensic findings.**
These phases are important for:
* **detecting unauthorized access**
* **tracing communication paths**
* **reconstructing network incidents**