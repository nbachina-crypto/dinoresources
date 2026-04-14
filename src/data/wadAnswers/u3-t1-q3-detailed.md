**XML Namespaces** are used to avoid **naming conflicts** when combining XML from different sources into a single document. Since XML allows custom tags, different systems may use the same tag names with different meanings. Namespaces uniquely identify elements and attributes by associating them with a **URI**.
### Namespace Declaration
A namespace is declared using the `xmlns` attribute:
```xml id="y2c7mf"
<root xmlns:h="http://www.example.com/html"
      xmlns:f="http://www.example.com/furniture">
  <h:table>
    <h:tr>
      <h:td>Text</h:td>
    </h:tr>
  </h:table>
  <f:table>
    <f:name>Dining Table</f:name>
  </f:table>
</root>
```
Here, **h** and **f** are prefixes mapped to different URIs. Even though `<h:table>` and `<f:table>` use the tag **table**, they are treated as different elements due to their different namespace prefixes. This ensures uniqueness and avoids confusion.
### Document Object Model (DOM)
The **Document Object Model (DOM)** is a programming interface that represents an XML document as a **tree structure in memory**. Each part of the document—elements, attributes, and text—is represented as a **node**.
Example XML:
```xml
<student>
  <name>Rahul</name>
</student>
```
DOM Representation:
* **student** → root node
* **name** → child node
* **Rahul** → text node
### DOM Operations
DOM allows programs (using JavaScript, Java, etc.) to **access and manipulate XML dynamically**. Common operations include reading values, modifying content, and adding or removing elements.
Example:
```javascript
document.getElementsByTagName("name")[0].textContent = "Amit";
```
This updates the value of the **name** element.
### Key Role
* **Namespaces** → prevent naming conflicts by uniquely identifying elements
* **DOM** → provides a structured way to access and modify XML data in memory