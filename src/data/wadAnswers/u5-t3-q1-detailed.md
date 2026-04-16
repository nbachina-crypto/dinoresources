### Introduction to ReactJS
**ReactJS** is a JavaScript library used for building **user interfaces**, especially for **single-page applications (SPAs)**. It follows a **declarative approach**, where developers describe how the UI should look based on the application state.
When the state changes, React efficiently updates only the necessary parts of the UI without reloading the page.
---
### Virtual DOM
One of the key features of React is the **Virtual DOM**.
* React creates a **virtual representation** of the real DOM in memory
* When data changes, React compares the new Virtual DOM with the previous one (*diffing*)
* Only the changed parts are updated in the actual DOM
> This process improves performance by reducing unnecessary DOM updates.
---
### Component-Based Architecture
React is built on a **component-based architecture**, where the UI is divided into independent and reusable units called **components**.
Each component encapsulates:
* Structure (**JSX**)
* Logic
* Behavior
Applications are created by combining multiple components hierarchically.
---
### Types of Components
## Functional Components
**Functional components** are simple JavaScript functions that return JSX.
```javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
---
## Class Components
**Class components** extend `React.Component` and can manage **state** and **lifecycle methods**.
```javascript
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```
---
### Props and State
## Props
* `props` are inputs passed from parent to child components
* They are **read-only**
## State
* `state` is internal data managed by a component
* It can change over time
* Changes in state trigger **re-rendering**
> Props = external data, State = internal data.
---
### Component Composition
React allows building complex UIs using **component composition**.
```javascript
function App() {
    return (
        <div>
            <Welcome name="Rahul" />
            <Welcome name="Amit" />
        </div>
    );
}
```
* Smaller components are combined to form larger ones
* Promotes reusability and modular design
---
### Unidirectional Data Flow
React follows a **unidirectional (one-way) data flow**:
* Data flows from **parent → child components**
* Makes applications more predictable and easier to debug
> This structured flow improves maintainability of large applications.
---
### Summary
* **ReactJS** is used to build dynamic and efficient user interfaces
* Uses **Virtual DOM** for optimized updates
* Follows a **component-based architecture**
* Supports **props and state** for data handling
* Maintains **unidirectional data flow**
---
