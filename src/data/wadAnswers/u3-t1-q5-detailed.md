**XPath**, **XQuery**, and **FLOWR** are used for **querying and extracting data** from XML documents.
### XPath
**XPath (XML Path Language)** is used to navigate through **elements** and **attributes** in an XML document. It uses path expressions similar to file in our systems inorder to select nodes.
Example:
```xml
/student/name
```
This selects the **name** element inside the **student** element.
XPath supports different types of navigation such as:
* **Absolute paths** → `/student/name`
* **Relative paths** → `name`
* **Wildcards** → `*`
  It can also use conditions:
```xml
/student[name="Rahul"]
```
This selects the **student** element where the **name** is *Rahul*.
### XQuery
**XQuery** is a query language built on top of **XPath** and is used to retrieve and manipulate XML data. It supports **complex queries**, **filtering**, **sorting**, **joins**, and **transformations**, it similar to SQL but designed for XML.
Example:
```xquery
for $s in doc("students.xml")/student
where $s/rollno > 100
return $s/name
```
This retrieves the names of students whose **roll number** is greater than **100**.
### FLOWR Expression
**FLOWR** is the core construct in XQuery and stands for **For, Let, Where, Order by, Return**. It provides a structured way to process XML data.
Structure:
```xquery
for $var in expression
let $var2 := expression
where condition
order by expression
return result
```
### Components of FLOWR
* **for** → iterates over a sequence of nodes
* **let** → assigns a value to a variable without iteration
* **where** → filters data based on a condition
* **order by** → sorts the result
* **return** → specifies the output
  Example:
```xquery
for $s in doc("students.xml")/student
where $s/marks > 80
order by $s/name
return $s/name
```
This selects student names with **marks greater than 80** and sorts them alphabetically.
### Summary
* **XPath** is used for **node selection**
* **XQuery** extends XPath for **advanced querying**
* **FLOWR** provides a **structured format** for writing XQuery expressions
