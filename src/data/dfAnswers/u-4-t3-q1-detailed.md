**Ontologies in mobile and embedded forensics** refer to a **structured and formal representation of forensic knowledge, concepts, entities, and their relationships** within the investigation domain.
They provide a common framework for organizing digital evidence so that data from different devices and sources can be analyzed systematically.
In simple terms, an ontology defines **what types of evidence exist, how they are classified, and how they are related**.
---
## Evidence Modeled Using Ontologies
For **mobile and embedded forensics**, ontologies help model data such as:
* **device information**
* **user accounts**
* **call logs**
* **SMS records**
* **application data**
* **sensor logs**
* **timestamps**
* **network activity**
* **system events**
---
## Example Relationships
For example, in mobile forensics, an ontology may define relationships like:
```text id="48163"
device -> contains -> SIM data
device -> stores -> messages
application -> generates -> log file
call log -> linked to -> timestamp
location record -> linked to -> user activity
```
This structured representation helps investigators **correlate evidence from multiple sources**.
> **Ontology-based models help connect related evidence in a clear and logical structure.**
---
## Embedded Forensics
In **embedded forensics**, ontologies are used to organize evidence from devices such as:
* **CCTV systems**
* **routers**
* **GPS devices**
* **IoT sensors**
* **vehicle control systems**
### Typical Ontology Elements
* **device type**
* **firmware version**
* **event logs**
* **configuration files**
* **sensor outputs**
* **access history**
---
## Main Purpose
The major purpose is to improve:
* **evidence correlation**
* **timeline reconstruction**
* **automated analysis**
For example, data from a **CCTV log**, **router access log**, and **mobile location record** can be connected through **timestamps** using an ontology-based model.
This makes analysis:
* **faster**
* **less ambiguous**
* **more consistent**
and improves **forensic reporting**.