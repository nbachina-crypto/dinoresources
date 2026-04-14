**XML** is a language used to store and transport data in a structured format using custom tags (**tags defined by user**).
---
### Basic Structure
An XML file may start with:
```xml
<?xml version="1.0" encoding="UTF-8"?>
```
Then it contains one main **root element**:
```xml
<student>
    <name>Rahul</name>
    <rollno>101</rollno>
</student>
```
* **student** → root element
* **name**, **rollno** → child elements
---
### Attributes
Extra information can be added using attributes:
```xml
<student id="101">
    <name>Rahul</name>
</student>
```
---
### Important Rules
* Tags must be **closed**
* Tags are **case-sensitive**
* Elements must be **properly nested**
* Only **one root element** is allowed
---
> XML structure is like a **tree**, where elements are connected in a parent-child format using strict tag rules.
