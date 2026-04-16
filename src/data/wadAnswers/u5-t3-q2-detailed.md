### Styling in ReactJS
In ReactJS, **styling** is handled in a **modular and component-based** way, matching its architecture. There are multiple approaches to apply styles.
---
### Inline Styling
**Inline styles** are written as JavaScript objects and applied directly to elements.
```javascript
const style = {
    color: "blue",
    fontSize: "18px"
};
function App() {
    return <p style={style}>Hello</p>;
}
```
* Styles are defined as **objects**
* Property names use **camelCase** (e.g., `fontSize`)
> Inline styles are useful for dynamic styling but not ideal for large-scale styling.
---
### External CSS
React also supports **external CSS files**, which are imported into components.
```javascript
import './styles.css';
function App() {
    return <p className="text">Hello</p>;
}
```
* Uses `className` instead of `class`
* Allows reuse of styles across components
---
### Advanced Styling Methods
React provides more advanced styling options:
* **CSS Modules** – scoped styles specific to a component
* **Styled-components** – dynamic styling using JavaScript and tagged templates
> These approaches prevent style conflicts and improve maintainability.
---
### Form Programming in ReactJS
React handles forms using a **state-driven approach**, primarily through **controlled components**.
---
### Controlled Components
In controlled components:
* Form data is managed using **state**
* Input values are controlled by React
* Changes are handled using **event handlers**
```javascript
import { useState } from "react";
function Form() {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
```
* The input value is linked to **state (`name`)**
* `onChange` updates the state
* Ensures a **single source of truth**
> Controlled components provide better control and easier validation.
---
### Uncontrolled Components
React also supports **uncontrolled components**:
* Form data is handled using **refs**
* State is not used to control inputs
However, controlled components are generally preferred for better predictability.
---
### Form Validation
Form validation in React is typically implemented by:
* Checking **state values**
* Displaying error messages conditionally
* Can be combined with libraries or custom logic
> Validation is flexible and fully controlled by the developer.
---
### Summary
* **Styling** can be done using inline styles, CSS files, or advanced modular approaches
* **Forms** are managed using controlled components and state
* **Event handling** ensures real-time updates of form data
