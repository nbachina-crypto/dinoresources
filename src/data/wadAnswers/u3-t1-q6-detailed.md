**JSON (JavaScript Object Notation)** is a lightweight **data interchange format** used to store and exchange structured data. It is text-based, human-readable, and easy for machines to parse and generate. It is widely used in **web applications, APIs, and client-server communication**.
### Features of JSON
* Simple syntax
* Language-independent
* Easy to parse and generate
* Supports nested structures
* Faster for data exchange
### JSON Structure
JSON represents data using **key-value pairs** and **arrays**.
* **Object** → enclosed in `{}` and contains key-value pairs
* **Array** → enclosed in `[]` and contains a list of values
  Example:
```json
{
  "name": "Rahul",
  "rollno": 101,
  "course": "Web Development",
  "skills": ["HTML", "CSS", "JavaScript"]
}
```
### Data Types in JSON
JSON supports:
* **String**
* **Number**
* **Boolean**
* **Array**
* **Object**
* **null**
### Key Characteristics
* Does not use **closing tags**, reduces syntax
* Easier to process compared to XML
* Widely used in **REST APIs**
* Supports **nested objects and arrays**
---
### Comparison: JSON vs XML
| Feature     | JSON               | XML                    |
| ----------- | ------------------ | ---------------------- |
| Structure   | Key-value pairs    | Tags and elements      |
| Readability | Simple             | More descriptive       |
| Parsing     | Faster             | Slower                 |
| Data Types  | Supported directly | Mostly text-based      |
| Validation  | Limited            | Strong (DTD, XSD)      |
| Features    | Minimal            | Advanced (XPath, XSLT) |
### Example Comparison
XML:
```xml
<student>
    <name>Rahul</name>
    <rollno>101</rollno>
    <course>Web Development</course>
</student>
```
JSON:
```json
{
  "name": "Rahul",
  "rollno": 101,
  "course": "Web Development"
}
```
### Usage Perspective
* **JSON** focuses on **data exchange and simplicity**
* **XML** supports **document structure, metadata, and validation**
### Summary
JSON is preferred in modern web applications due to its **lightweight and efficient structure**, while XML is used when **strict validation, extensibility, and complex document representation** are required.
