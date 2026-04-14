**Namespaces** in XML are used to avoid confusion when different elements have the same name. They use prefixes to make tags unique.
Example:
```xml id="1g9h2s"
<h:table>...</h:table>
<f:table>...</f:table>
```
Here, **h** and **f** indicate different categories, so the tags do not conflict.
### DOM
**DOM** represents an XML document as a **tree structure** in memory. Each element becomes a node, making it easy for programs to read and modify data.
### Key Idea
Namespaces help avoid **name conflicts**, while DOM helps in **accessing and modifying XML data programmatically**.
