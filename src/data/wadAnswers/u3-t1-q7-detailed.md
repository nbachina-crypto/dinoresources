**JSON (JavaScript Object Notation)** represents data using **data types, objects, and arrays**, which together form its core structure.
### JSON Data Types
JSON supports a limited set of **built-in data types** for representing structured data:
* **String** → text enclosed in double quotes (`"name": "Rahul"`)
* **Number** → integer or floating point (`"rollno": 101`)
* **Boolean** → `true` or `false`
* **null** → represents empty or no value
* **Object** → collection of key-value pairs
* **Array** → ordered list of values
  Example:
```json
{
  "name": "Rahul",
  "age": 20,
  "isStudent": true,
  "marks": null
}
```
### JSON Objects
A **JSON object** is a collection of **key-value pairs** enclosed in `{}`. Each key is a string, and values can be any valid JSON data type.
Example:
```json
{
  "name": "Rahul",
  "rollno": 101,
  "course": "Web Development"
}
```
Objects are used to represent **real-world entities** with properties.
### JSON Arrays
A **JSON array** is an **ordered list of values** enclosed in `[]`. Values can be of any data type, including objects and other arrays.
Example:
```json
{
  "skills": ["HTML", "CSS", "JavaScript"]
}
```
Arrays are useful for storing **multiple values** under a single key.
### Nested Structures
JSON allows **nesting**, where objects can contain arrays and arrays can contain objects.
Example:
```json
{
  "student": {
    "name": "Rahul",
    "rollno": 101,
    "skills": ["HTML", "CSS"],
    "address": {
      "city": "Hyderabad",
      "pincode": 500001
    }
  }
}
```
This shows how complex structured data can be represented.
