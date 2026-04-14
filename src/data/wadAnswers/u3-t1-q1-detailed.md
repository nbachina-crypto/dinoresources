**XML (Extensible Markup Language)** is used to store and transport data in a structured format that is both human-readable and machine-readable. Unlike HTML which uses pre-defined tags (ex: `<p>`,`<b>`), in XML users can define their own tags **(user-defined tags)** to describe data.
---
### XML Declaration
An XML document often begins with a declaration:
```xml
<?xml version="1.0" encoding="UTF-8"?>
```
This specifies the **version** and **character encoding**. It is optional but commonly used.
---
### Elements and Tags
The core building block of XML is an **element**, which consists of:
* A **start tag**
* Content
* An **end tag**
Example:
```xml
<student>Rahul</student>
```
Here, **student** is the element and *Rahul* is the content.
---
### Nested Structure (Hierarchy)
XML supports **nested elements**, forming a tree-like structure:
```xml
<student>
    <name>Rahul</name>
    <rollno>101</rollno>
    <course>Web Development</course>
</student>
```
* **student** is the *root element*
* Other elements are *child elements*
---
### Attributes
Attributes provide additional information and are defined within the start tag itself:
```xml
<student id="101" status="active">
    <name>Rahul</name>
</student>
```
* **id** and **status** are attributes of the **student** element
---
### Syntax Rules
XML follows strict syntax rules:
1. **Tags must be closed**
```xml
<email>abc@example.com</email>
<line-break />
```
2. **Tags are case-sensitive**
* `<Name>` ≠ `<name>`
3. **Proper nesting is required**
Correct:
```xml
<a><b>Text</b></a>
```
Incorrect:
```xml
<a><b>Text</a></b>
```
4. **Single root element is mandatory**
> Every XML document must have exactly one root element.
---
### Comments
Comments are written as:
```xml
<!-- This is a comment -->
```