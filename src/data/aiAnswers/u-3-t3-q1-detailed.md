A **Knowledge-based Agent** is an intelligent agent in **Artificial Intelligence** that uses **stored knowledge** and **logical reasoning** to make decisions and perform actions.
Unlike simple reflex agents, it does not respond only to current inputs. Instead, it uses a **knowledge base** and **inference mechanisms** to reason about the environment.
---
## Architecture
The architecture mainly consists of **four core components**.
### Basic Flow
```text id="54782"
environment -> sensors -> knowledge base + inference engine -> actuators -> environment
```
### Structure
```text id="31456"
        Environment
             |
          Sensors
             |
             v
      Knowledge Base
             |
      Inference Engine
             |
      Decision / Action Module
             |
          Actuators
             |
             v
        Environment
```
---
## Components
### 1. Sensors
These collect information from the environment.
Examples:
* **camera**
* **keyboard input**
* **system state**
* **user commands**
They convert environmental data into **percepts**.
---
### 2. Knowledge Base (KB)
This is the **central repository of facts, rules, and relationships**.
It stores:
* **facts** – known information
* **rules** – IF-THEN logic
* **domain knowledge** – concepts about the problem
### Example Rule
```text id="73621"
IF temperature > 40
THEN fan = ON
```
---
### 3. Inference Engine
This component applies **logical reasoning** to the knowledge base.
It derives **new conclusions** from existing facts and rules.
Common reasoning methods:
* **forward chaining**
* **backward chaining**
### Example
If the KB contains:
```text id="kb-example"
rain = true
IF rain THEN carry umbrella
```
the inference engine concludes:
```text id="inference-result"
carry umbrella
```
> **The inference engine converts stored knowledge into decisions.**
---
### 4. Decision / Action Module
This selects the **most appropriate action** based on inferred knowledge.
---
### 5. Actuators
These execute the chosen action in the environment.
Examples:
* **display message**
* **move robot arm**
* **switch device ON/OFF**
---
## Working Process
```text id="48267"
sense environment
update knowledge base
apply reasoning
infer new knowledge
choose action
perform action
```
---
## Role and Applications
Knowledge-based agents are used where **reasoning, planning, and decision-making** are required.
Applications include:
* **expert systems**
* **medical diagnosis**
* **robotics**
* **intelligent assistants**