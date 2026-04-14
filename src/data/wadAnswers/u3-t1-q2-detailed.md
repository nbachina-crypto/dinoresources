**Document Type Definition (DTD)** and **XML Schema (XSD)** are used to define the **structure, rules, and constraints** of an XML document. They ensure that the XML data is **valid** and follows a certain rules.
### DTD (Document Type Definition)
DTD defines the legal elements, attributes, and their relationships in an XML document. It specifies which elements are allowed, their order, and what type of content they can contain.
Example:
```xml
<!DOCTYPE student [
    <!ELEMENT student (name, rollno)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT rollno (#PCDATA)>
    <!ELEMENT age (#PCDATA)>
]>
```
The above code means that the **student** element must always contain **name**, **rollno** and all elemnts hold *parsed character data **(PCDATA)**.
DTD can be:
* **Internal DTD** (defined inside the XML file)
* **External DTD** (defined in a separate `.dtd` file)
  **Limitations of DTD:**
* No strong **data type support** (mostly text-based)
* Limited **validation capabilities**
### XML Schema (XSD)
**XML Schema (XSD)** is a more powerful alternative to DTD. It is written in **XML syntax** and provides detailed control over structure and data types.
Example:
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string"/>
        <xs:element name="rollno" type="xs:int"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```
The above code defines that the **name** element must be a *string* and **rollno** element must be an *integer*
`<xs:complexType>` means he element is not just plain text—it can contain other elements (child elements) or attributes.
`</xs:sequence>` defines the order of elements. It means the child elements must appear exactly in the given order.
### Features of XML Schema
* Supports **data types** such as string, integer, date
* Allows **constraints** like length, range, and patterns
* Provides **namespace support**
* Enables better **extensibility and reuse**
### Role in XML Validation
Both DTD and XML Schema are used to **validate XML documents**. A valid XML must follow the rules defined in its DTD or Schema, ensuring:
* **Data consistency**
* **Correct structure**
* **Interoperability between systems**
