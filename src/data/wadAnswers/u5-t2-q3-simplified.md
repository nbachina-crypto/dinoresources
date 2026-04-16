### DOM Handling
AngularJS controls the **DOM** using directives like:
* `ng-bind`
* `ng-model`
These automatically update the page when data changes.
---
### Event Handling
Events are handled using directives like `ng-click`, which link user actions to controller functions.
### Example
```html
<button ng-click="show()">Click</button>
```
---
### Form Validation
AngularJS automatically validates input fields using rules like `required` and tracks errors using properties like `$invalid`
### Example
```html
<input ng-model="name" required>
```
---
### Final Idea
* **DOM updates** happen automatically using directives
* **Events** are handled declaratively
* **Validation** is built-in and automatic
AngularJS simplifies development by reducing manual JavaScript work.
