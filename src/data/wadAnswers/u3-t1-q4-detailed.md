**XML data** can be presented using **CSS** or **XSLT**, but both differ in capability and purpose.
### Using CSS with XML

**CSS (Cascading Style Sheets)** provides a simple way to style XML elements for display in a browser. XML elements are treated similarly to HTML elements, and styles are applied using selectors.
We link a XML file to a CSS file using the below code:
```xml 
<?xml-stylesheet type="text/css" href="style.css"?>
```
Example XML:
```xml
<student>
    <name>Rahul</name>
    <rollno>101</rollno>
</student>
```
Example CSS:
```css id="c9x7pt"
student {
    display: block;
    border: 1px solid black;
    padding: 10px;
}
name {
    color: blue;
    font-weight: bold;
}
rollno {
    color: green;
}
```
CSS only controls **presentation aspects** such as color, font, spacing, and layout. It does not modify the structure or content of XML.
### Using XSLT
**XSLT (Extensible Stylesheet Language Transformations)** is used to **transform XML data** into other formats such as HTML, plain text, or another XML structure.
The XML file links to an XSLT file using the below code:
```xml id="k8zq4r"
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```
Example XSLT:
```xml id="r5m2vx"
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Student Details</h2>
        <p>Name: <xsl:value-of select="student/name"/></p>
        <p>Roll No: <xsl:value-of select="student/rollno"/></p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```
XSLT supports operations like:
* Reordering data
* Filtering elements
* Conditional logic
* Looping
  This allows full control over both **structure and content** of the output.
### Key Difference
| Feature           | CSS              | XSLT            |
| ----------------- | ---------------- | --------------- |
| Purpose           | Styling          | Transformation  |
| Changes Structure | No               | Yes             |
| Logic Support     | No               | Yes             |
| Output Formats    | XML display only | HTML, XML, Text |
### Summary
**CSS** is limited to styling XML elements, while **XSLT** is a powerful transformation tool that can reshape and present XML data in different formats.
